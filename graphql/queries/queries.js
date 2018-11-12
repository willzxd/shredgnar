const {
  GraphQLObjectType,
  GraphQLList
} = require('graphql');
const {each, some, find, map} = require('lodash');
const Promise = require('bluebird');

const ItemModel = require('../../models/item');
const ItemCategoryModel = require('../../models/itemCategory');
const ProductCategoryModel = require('../../models/productCategory');
const StoreModel = require('../../models/store');
const ProductModel = require('../../models/product');

const {itemCategoryType} = require('../types/itemCategory');
const {itemType} = require('../types/item');
const {productType} = require('../types/product');
const {productCategoryType} = require('../types/productCategory');
const {productInputType} = require('../types/productInput');
const {storeType} = require('../types/store');

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
    },
    getAllProducts: {
      type: new GraphQLList(productType),
      resolve: function () {
        const products = ProductModel.find().exec();
        if (!products) {
          throw new Error('getAllItemCategoryies Error');
        }
        return products;
      }
    },

    searchStores: {
      type: new GraphQLList(storeType),
      args: {
        userInputedProducts: {
          type: new GraphQLList(productInputType)
        }
      },
      resolve(parent, args) {
        return Promise.all(
          map(args.userInputedProducts, (inputProduct) =>
            ProductModel.distinct(
              'storeId',
              { productCategoryId: inputProduct.productCategoryId,
                ageGroup: inputProduct.ageGroup,
                skillLevel: inputProduct.skillLevel
              }
            ).exec()
          )
        )
          .then((results) => {
            console.log(results);
            const resultStoreIds = [];
            if(results.length) {
              each(results[0], (storeId) => {
                if (!some(results, (storeIdList) => !find(storeIdList, (id) => id.equals(storeId)))) {
                  resultStoreIds.push(storeId);
                }
              });
            }
            return Promise.all(map(resultStoreIds, (storeId) => 
              StoreModel.findById(storeId).exec()
            ));
          });

      }
    }
  }
});

