var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLFloat = require('graphql').GraphQLFloat;

// Store Type
exports.storeType = new GraphQLObjectType({
  name: 'store',
  fields: function () {
    return {
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
    }
  }
});

