var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;

// Store Type
exports.itemType = new GraphQLObjectType({
  name: 'item',
  fields: function () {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      internalName: {
        type: new GraphQLNonNull(GraphQLString)
      },
      itemCategoryId: {
        type: new GraphQLNonNull(GraphQLID)
      },
      skillLevel: {
        type: GraphQLInt
      }
    };
  }
});

