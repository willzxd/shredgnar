var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;

var productSchema = new Schema({
  storeId: {
    type: ObjectId,
    required: true
  },
  productCategoryId: {
    type: ObjectId,
    required: true
  },
  items: {
    type: [{type: ObjectId, ref: 'item'}],
  },
  productName: {
    type: String,
  },
  ageGroup: {
    type: String
  },
  gender: {
    type: String
  },
  skillLevel: {
    type: Number
  },
  // TODO: add relations of coupons, discount, Fees, upgrade, and downgrade
  prices: {
    type: [[Number]]
  },
  // record how many days have a free day
  nDayFree: {
    type: Number
  },
  description: {
    type: String
  }
});
var ProductModel = mongoose.model('product', productSchema);
module.exports = ProductModel;