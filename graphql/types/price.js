const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt
} = require('graphql');

// price Type
exports.priceType = new GraphQLObjectType({
  name: 'prices',
  fields: () => ({
    type: new GraphQLList(GraphQLInt)
  })
});

