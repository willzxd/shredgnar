const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLInt
} = require('graphql');

// product Type
exports.productInputType = new GraphQLInputObjectType({
  name: 'productInput',
  fields: function () {
    return {
      productCategoryId: {
        type: new GraphQLNonNull(GraphQLID)
      },
      ageGroup: {
        type: GraphQLString
      },
      skillLevel: {
        type: GraphQLInt
      }
    };
  }
});

