var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLList = require('graphql').GraphQLList;
var productCategoryType = require('../types/productCategory').productCategoryType;
var ProductCategoryModel = require('../../models/productCategory');

exports.addProductCategory = {
  type: productCategoryType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    itemCategories: {
      type: new GraphQLList(GraphQLID)
    }
  },
  resolve(root, params) {
    const model = new ProductCategoryModel(params);
    const newProductCategory = model.save();
    if (!newProductCategory) {
      throw new Error('Add productCategory fail! Name: ', params.name);
    }
    return newProductCategory;
  }
};

exports.removeProductCategory = {
  type: productCategoryType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const removedProductCategory = ProductCategoryModel.findByIdAndRemove(params.id).exec();
    if (!removedProductCategory) {
      throw new Error('Remove Product Category fail! id: ', params.id);
    }
    return removedProductCategory;
  }
};

exports.updateProductCategory = {
  type: productCategoryType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    itemCategories: {
      type: new GraphQLList(GraphQLID)
    }
  },
  resolve(root, params) {
    return ProductCategoryModel.findByIdAndUpdate(
      params.id,
      { $set: { name: params.name, itemCategories: params.itemCategories } },
      { new: true }
    )
      .catch(err => new Error('Fail to update product category! id: ', params.id, err));
  }
};