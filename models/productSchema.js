const Schema = require('mongoose').Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true},
  image: {type: String, required: true},
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  price: { type: Number, required: true, default: 0 }
}, {
  timestamps: true
});

module.exports = productSchema;
