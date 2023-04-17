const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = require('./productSchema');

const lineProductSchema = new Schema({
  qty: { type: Number, default: 1 },
  product: productSchema
}, {
  toJSON: { virtuals: true }
});

lineProductSchema.virtual('extPrice').get(function() {
  // 'this' is the embedded lineProduct sub-document 
  return this.qty * this.product.price;
});

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  lineProducts: [lineProductSchema],
  isPaid: { type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

orderSchema.virtual('orderTotal').get(function() {
  return this.lineProducts.reduce((total, product) => total + product.extPrice, 0);
});

orderSchema.virtual('totalQty').get(function() {
  return this.lineProducts.reduce((total, product) => total + product.qty, 0);
});

orderSchema.virtual('orderId').get(function() {
  return this.id.slice(-6).toUpperCase();
});

// Static methods are callable on the Model (Order)
orderSchema.statics.getCart = function(userId) {
  // 'this' is bound to the model (don't use an arrow function)
  // return the promise that resolves to a cart (the user's unpaid order)
  return this.findOneAndUpdate(
    // query
    { user: userId, isPaid: false },
    // update - in the case the order (cart) is upserted
    { user: userId },
    // upsert option creates the doc if it doesn't exist!
    { upsert: true, new: true }
  );
};

// Instance methods are callable on the document (instance)
orderSchema.methods.addProductToCart = async function(productId) {
  const cart = this;
  // Check if the product already exists in the cart
  const lineProduct = cart.lineProducts.find(lineProduct => lineProduct.product._id.equals(productId));
  if (lineProduct) {
    lineProduct.qty += 1;
  } else {
    const product = await mongoose.model('Product').findById(productId);
    cart.lineProducts.push({ product });
  }
  // return the promise that is returned by save()
  return cart.save();
}

// Instance method to set an product's qty in the cart (will add product if does not exist)
orderSchema.methods.setProductQty = function(productId, newQty) {
  // this keyword is bound to the cart (order doc)
  const cart = this;
  // Find the line product in the cart for the menu product
  const lineProduct = cart.lineProducts.find(lineProduct => lineProduct.product._id.equals(productId));
  if (lineProduct && newQty <= 0) {
    // Calling remove, removes itself from the cart.lineProducts array
    lineProduct.remove();
  } else if (lineProduct) {
    // Set the new qty - positive value is assured thanks to prev if
    lineProduct.qty = newQty;
  }
  // return the save() method's promise
  return cart.save();
};

module.exports = mongoose.model('Order', orderSchema);