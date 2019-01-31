var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemCategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});
var ItemCategoryModel = mongoose.model('itemCategory', itemCategorySchema);
module.exports = ItemCategoryModel;