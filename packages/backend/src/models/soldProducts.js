const mongoose = require('mongoose');
const schema = mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  soldAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('SoldProduct', schema);