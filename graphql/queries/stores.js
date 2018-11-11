const {
  GraphQLObjectType,
  GraphQLList
} = require('graphql');
const {each, some, find, map} = require('lodash');

const ItemModel = require('../../models/item');
const ItemCategoryModel = require('../../models/itemCategory');
const ProductCategoryModel = require('../../models/productCategory');
const StoreModel = require('../../models/store');
const ProductModel = require('../../models/product');

const {itemCategoryType} = require('../types/itemCategory');
const {itemType} = require('../types/item');
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
    searchStores: {
      type: new GraphQLList(storeType),
      args: {
        userInputedProducts: {
          type: new GraphQLList(productInputType)
        }
      },
      resolve(parent, args) {
        const storeMatchAtLeastOne =[];
        each(args.userInputedProducts, (inputProduct) => {
          ProductModel.distinct('storeId', 
            { productCategoryId: inputProduct.productCategoryId, 
              ageGroup: inputProduct.ageGroup,
              skilllevel: inputProduct.skillLevel
            },
            function(err, results) {
              if (err) {
                throw new Error('Fail to find products based on user input', args.userInputedProducts);
              }
              storeMatchAtLeastOne.push(results);
            }
          );
          const resultStoreIds = [];
          if(storeMatchAtLeastOne.length) {
            each(storeMatchAtLeastOne[0], (storeId) => {              
              if (!some(storeMatchAtLeastOne, (storeIdList) => !find(storeIdList, storeId))) {
                resultStoreIds.push(storeId);
              }
            });
          }
          return map(resultStoreIds, (storeId) => {
            return StoreModel.findById(storeId).exec();
          });
        });
      }
    }
  }
});

