var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLInt = require('graphql').GraphQLInt;
var itemType = require('../types/item').itemType;
var ItemModel = require('../../models/item');

exports.addItem = {
  type: itemType,
  args: {
    internalName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    itemCategoryId: {
      type: new GraphQLNonNull(GraphQLID)
    },
    level: {
      type: GraphQLInt
    }
  },
  resolve(root, params) {
    const model = new ItemModel(params);
    const newItemCategory = model.save();
    if (!newItemCategory) {
      throw new Error('Fail to Add Item! Name: ', params.internalName);
    }
    return newItemCategory;
  }
};

exports.removeItem = {
  type: itemType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const removedItemCategory = ItemModel.findByIdAndRemove(params.id).exec();
    if (!removedItemCategory) {
      throw new Error('Fail to Remove Item! id: ', params.id);
    }
    return removedItemCategory;
  }
};

exports.updateItem = {
  type: itemType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    internalName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    itemCategoryId: {
      type: new GraphQLNonNull(GraphQLID)
    },
    level: {
      type: GraphQLInt
    }
  },
  resolve(root, params) {
    return ItemModel.findByIdAndUpdate(
      params.id,
      { $set: { 
        internalName: params.internalName,
        itemCategoryId: params.itemCategoryId,
        level: params.level
      } },
      { new: true }
    )
      .catch(err => new Error('Fail to Update Item! id: ', params.id, err));
  }
};