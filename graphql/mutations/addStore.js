var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var storeType = require('../types/store').storeType;
var StoreModel = require('../../models/store');

exports.addStore = {
  type: storeType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    phoneNumber: {
      type: GraphQLString
    },
    address: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    website: {
      type: GraphQLString
    },
    reseravationLink: {
      type: GraphQLString
    }
  },
  resolve(root, params) {
    const uModel = new StoreModel(params);
    const newStore = uModel.save();
    if (!newStore) {
      throw new Error('Error');
    }
    return newStore;
  }
}