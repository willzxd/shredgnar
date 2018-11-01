var addStore = require('./addStore').addStore;
var removeStore = require('./removeStore').removeStore;
var updateStore = require('./updateStore').updateStore;
var addProductCategory = require('./productCategoryMutations').addProductCategory;
var removeProductCategory = require('./productCategoryMutations').removeProductCategory;
var updateProductCategory = require('./productCategoryMutations').updateProductCategory; 
var addItemCategory = require('./itemCategoryMutations').addItemCategory;
var removeItemCategory = require('./itemCategoryMutations').removeItemCategory;
var updateItemCategory = require('./itemCategoryMutations').updateItemCategory; 

module.exports = {
  addStore,
  removeStore,
  updateStore,
  addProductCategory,
  removeProductCategory,
  updateProductCategory,
  addItemCategory,
  removeItemCategory,
  updateItemCategory
};