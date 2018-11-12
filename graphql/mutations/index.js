const {addStore, removeStore, updateStore} = require('./storeMutations');
const {addProductCategory, removeProductCategory, updateProductCategory} = require('./productCategoryMutations');
const {addItemCategory, removeItemCategory, updateItemCategory} = require('./itemCategoryMutations');
const {addItem, removeItem, updateItem} = require('./itemMutations');
const {addProduct, removeProduct, updateProduct} = require('./productMutations');

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
  updateItem,
  addProduct,
  removeProduct,
  updateProduct
};