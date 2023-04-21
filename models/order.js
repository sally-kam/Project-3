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
// calculates the total price of a order but summing up the extended price of each line product
orderSchema.virtual('orderTotal').get(function() {
  return this.lineProducts.reduce((total, product) => total + product.extPrice, 0);
});

// calculates the total quantity of products in an order by summing up the quantity of each line product in the order
orderSchema.virtual('totalQty').get(function() {
  return this.lineProducts.reduce((total, product) => total + product.qty, 0);
});

// generates a new order identifier by taking the last 6 characters of the order._id from the database and converting them to uppercase
orderSchema.virtual('orderId').get(function() {
  return this.id.slice(-6).toUpperCase();
});


// Static methods are callable on the Model (Order)

// finds or creates a user's unpaid order by searching for an order with userId and isPaid:false, if no orders exist, it creates an upsert
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
// adds a products to the cart by searching for an existing line product with the given productId and updating the quantity by 1. if the product doesn't exist a new line product is added to the cart with a quantity of 1.
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


// Instance method to set an product's qty in the cart by searching for the existing line product with the given productId and updating the quantity to the newQty. If the product does not exist in the cart and newQty is greater than 0, a new line product is added with the given newQty value. If the product does not exist in the cart and newQty is less than or equal to 0, the line product will be removed from the cart.
orderSchema.methods.setProductQty = function(productId, newQty) {
  // this keyword is bound to the cart (order doc)
  const cart = this;
  // Find the line product index in the cart for the menu product
  const lineProductIndex = cart.lineProducts.findIndex(lineProduct => lineProduct.product._id.equals(productId));
  if (lineProductIndex !== -1 && newQty <= 0) {
    // Remove the line product from the cart.lineProducts array
    cart.lineProducts.splice(lineProductIndex, 1);
  } else if (lineProductIndex !== -1) {
    // Set the new qty - positive value is assured thanks to prev if
    cart.lineProducts[lineProductIndex].qty = newQty;
  }
  // return the save() method's promise
  return cart.save();
};

module.exports = mongoose.model('Order', orderSchema);