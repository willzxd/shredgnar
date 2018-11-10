const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLList
} = require('graphql');
const {productType} = require('./product');

// Store Type
exports.storeType = new GraphQLObjectType({
  name: 'store',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    phoneNumber: {
      type: GraphQLString
    },
    address: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    website: {
      type: GraphQLString
    },
    reseravationLink: {
      type: GraphQLString
    },
    // TODO: add operationHours
    // TODO: add score of google review and score of yelp review
    products: {
      type: new GraphQLList(productType),
      resolve(parent, args) {
        return [
          {
            id: '1',
            storeId: '1',
            productCategoryId: '201',
            items: ['301', '302'],
            productName: 'product 1 on store 1',
            price: [[3, 1],[4, 3]]
          },
          {
            id: '2',
            storeId: '1',
            productCategoryId: '202',
            items: ['301', '302'],
            productName: 'product 2 on store 1',
            price: [[3, 2],[5, 4]]
          }
        ];
      }
    }
  })
});

