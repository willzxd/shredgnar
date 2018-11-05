var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLList = require('graphql').GraphQLList;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;

// Store Type
exports.productType = new GraphQLObjectType({
  name: 'product',
  fields: function () {
    return {
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
    };
  }
});

