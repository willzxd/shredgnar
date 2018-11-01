var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var storeType = require('../types/store').storeType;
var StoreModel = require('../../models/store');

exports.updateStore = {
  type: storeType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
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
    return StoreModel.findByIdAndUpdate(
      params.id,
      { $set: { name: params.name } },
      { new: true }
    )
      .catch(err => new Error(err));
  }
};

