var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var StoreModel = require('../../models/store');
var storeType = require('../types/store').storeType;
var ProductCategoryModel = require('../../models/productCategory');
var productCategoryType = require('../types/productCategory').productCategoryType;
var ItemCategoryModel = require('../../models/itemCategory');
var itemCategoryType = require('../types/itemCategory').itemCategoryType;
var ItemModel = require('../../models/item');
var itemType = require('../types/item').itemType;

// Query
exports.queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    getAllStores: {
      type: new GraphQLList(storeType),
      resolve: function () {
        const stores = StoreModel.find().exec();
        if (!stores) {
          throw new Error('getAllStores Error');
        }
        return stores;
      }
    },
    getAllProductCategories: {
      type: new GraphQLList(productCategoryType),
      resolve: function () {
        const productCategories = ProductCategoryModel.find().exec();
        if (!productCategories) {
          throw new Error('getAllProductCategories Error');
        }
        return productCategories;
      }
    },
    getAllItemCategoryies: {
      type: new GraphQLList(itemCategoryType),
      resolve: function () {
        const itemCategories = ItemCategoryModel.find().exec();
        if (!itemCategories) {
          throw new Error('getAllItemCategoryies Error');
        }
        return itemCategories;
      }
    },
    getAllItems: {
      type: new GraphQLList(itemType),
      resolve: function () {
        const items = ItemModel.find().exec();
        if (!items) {
          throw new Error('getAllItemCategoryies Error');
        }
        return items;
      }
    }
  }
});

