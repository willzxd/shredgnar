var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var storeType = require('../types/store').storeType;
var StoreModel = require('../../models/store');

exports.removeStore = {
  type: storeType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const removedStore = StoreModel.findByIdAndRemove(params.id).exec();
    if (!removedStore) {
      throw new Error('Error');
    }
    return removedstore;
  }
}
