var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;

var productCategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  itemCategories: {
    type: [ObjectId]
  }
});
var ProductCategoryModel = mongoose.model('productCategory', productCategorySchema);
module.exports = ProductCategoryModel;