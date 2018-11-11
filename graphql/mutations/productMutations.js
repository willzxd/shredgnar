const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = require('graphql');
const {productType} = require('../types/product');
var ProductModel = require('../../models/product');

exports.addProduct = {
  type: productType,
  args: {
    storeId: {
      type: new GraphQLNonNull(GraphQLID)
    },
    productCategoryId: {
      type: new GraphQLNonNull(GraphQLID)
    },
    items: {
      type: new GraphQLList(GraphQLID)
    },
    productName: {
      type: GraphQLString
    },
    ageGroup: {
      type: GraphQLString
    },
    gender: {
      type: GraphQLString
    },
    skillLevel: {
      type: GraphQLInt
    },
    // TODO: add relations of coupons, discount, Fees, upgrade, and downgrade
    prices: {
      type: new GraphQLList(new GraphQLList(GraphQLInt))
    },
    // record how many days have a free day
    nDayFree: {
      type: GraphQLInt
    },
    description: {
      type: GraphQLString
    }
  },
  resolve(root, params) {
    const uModel = new ProductModel(params);
    const newStore = uModel.save();
    if (!newStore) {
      throw new Error('Error');
    }
    return newStore;
  }
};

exports.removeProduct = {
  type: productType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    const removedStore = ProductModel.findByIdAndDelete(params.id).exec();
    if (!removedStore) {
      throw new Error('Error');
    }
    return removedStore;
  }
};

exports.updateProduct = {
  type: productType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    storeId: {
      type: new GraphQLNonNull(GraphQLID)
    },
    productCategoryId: {
      type: new GraphQLNonNull(GraphQLID)
    },
    items: {
      type: new GraphQLList(GraphQLID)
    },
    productName: {
      type: GraphQLString
    },
    ageGroup: {
      type: GraphQLString
    },
    gender: {
      type: GraphQLString
    },
    skillLevel: {
      type: GraphQLInt
    },
    // TODO: add relations of coupons, discount, Fees, upgrade, and downgrade
    prices: {
      type: new GraphQLList(new GraphQLList(GraphQLInt))
    },
    // record how many days have a free day
    nDayFree: {
      type: GraphQLInt
    },
    description: {
      type: GraphQLString
    }
  },
  resolve(root, params) {
    return ProductModel.findByIdAndUpdate(
      params.id,
      { $set: { name: params.name } },
      { new: true }
    )
      .catch(err => new Error(err));
  }
};


