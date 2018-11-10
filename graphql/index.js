var GraphQLSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var queryType = require('./queries/stores').queryType;
var mutation = require('./mutations/index');

const Mutation =  new GraphQLObjectType({
  name: 'Mutation',
  fields: mutation
});

exports.shredGnarSchema = new GraphQLSchema({
  query: queryType,
  mutation: Mutation
});

