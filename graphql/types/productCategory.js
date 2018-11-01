var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLList = require('graphql').GraphQLList;

/**
 * ProductCategory Type
 * This type stores the primary key, the name of a product category,
 * and a list of cateogries of items belongs to this product category
 */
exports.productCategoryType = new GraphQLObjectType({
  name: 'productCategory',
  fields: function () {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      name: {
        type: new GraphQLNonNull(GraphQLString)
      },
      itemCategories: {
        type: new GraphQLList(GraphQLID)
      },
    };
  }
});

