var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  internalName: {
    type: String,
    required: true
  },
  itemCategoryId: {
    type: ObjectId,
    required: true
  },
  skillLevel: {
    type: Number
  }
  
});
var ItemModel = mongoose.model('item', itemSchema);
module.exports = ItemModel;