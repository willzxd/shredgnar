var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var itemCategoryType = require('../types/itemCategory').itemCategoryType;
var ItemCategoryModel = require('../../models/itemCategory');

exports.addItemCategory = {
  type: itemCategoryType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    description: {
      type: GraphQLString
    }
  },
  resolve(root, params) {
    const model = new ItemCategoryModel(params);
    const newItemCategory = model.save();
    if (!newItemCategory) {
      throw new Error('Fail to add Item Category! Name: ', params.name);
    }
    return newItemCategory;
  }
};

exports.removeItemCategory = {
  type: itemCategoryType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const removedItemCategory = ItemCategoryModel.findByIdAndRemove(params.id).exec();
    if (!removedItemCategory) {
      throw new Error('Fail to Remove Iroduct Category! id: ', params.id);
    }
    return removedItemCategory;
  }
};

exports.updateItemCategory = {
  type: itemCategoryType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: GraphQLString
    }
  },
  resolve(root, params) {
    return ItemCategoryModel.findByIdAndUpdate(
      params.id,
      { $set: { name: params.name, itemCategories: params.itemCategories } },
      { new: true }
    )
      .catch(err => new Error('Fail to update item category! id: ', params.id, err));
  }
};