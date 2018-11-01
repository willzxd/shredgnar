var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;

/**
 * itemCategory Type
 * This type stores the primary key, the name of a item category,
 * and its description
 */
exports.itemCategoryType = new GraphQLObjectType({
  name: 'itemCategory',
  fields: function () {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      name: {
        type: new GraphQLNonNull(GraphQLString)
      },
      description: {
        type: GraphQLString
      }
    };
  }
});

