const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList,
  GraphQLString,
  GraphQLInt
} = require('graphql');
const {priceType} = require('./price');

// product Type
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
        type: new GraphQLList(priceType)
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

