var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLID = require('graphql').GraphQLID;
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
};

exports.removeStore = {
  type: storeType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    const removedStore = StoreModel.findByIdAndDelete(params.id).exec();
    if (!removedStore) {
      throw new Error('Error');
    }
    return removedStore;
  }
};

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


