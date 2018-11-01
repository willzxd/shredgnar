var addStore = require('./storeMutations').addStore;
var removeStore = require('./storeMutations').removeStore;
var updateStore = require('./storeMutations').updateStore;
var addProductCategory = require('./productCategoryMutations').addProductCategory;
var removeProductCategory = require('./productCategoryMutations').removeProductCategory;
var updateProductCategory = require('./productCategoryMutations').updateProductCategory; 
var addItemCategory = require('./itemCategoryMutations').addItemCategory;
var removeItemCategory = require('./itemCategoryMutations').removeItemCategory;
var updateItemCategory = require('./itemCategoryMutations').updateItemCategory; 
var addItem = require('./itemMutations').addItem;
var removeItem = require('./itemMutations').removeItem;
var updateItem = require('./itemMutations').updateItem; 

module.exports = {
  addStore,
  removeStore,
  updateStore,
  addProductCategory,
  removeProductCategory,
  updateProductCategory,
  addItemCategory,
  removeItemCategory,
  updateItemCategory,
  addItem,
  removeItem,
  updateItem
};