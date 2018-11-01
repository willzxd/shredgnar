var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String
  },
  address: {
    type: String
  },
  email: {
    type: String
  },
  website: {
    type: String
  },
  reseravationLink: {
    type: String
  },
});
var StoreModel = mongoose.model('store', storeSchema);
module.exports = StoreModel;