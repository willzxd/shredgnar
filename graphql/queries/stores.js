var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var StoreModel = require('../../models/store');
var storeType = require('../types/store').storeType;

// Query
exports.queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    getAllStores: {
      type: new GraphQLList(storeType),
      resolve: function () {
        const stores = StoreModel.find().exec();
        if (!stores) {
          throw new Error('Error');
        }
        return stores;
      }
    }
  }
});

