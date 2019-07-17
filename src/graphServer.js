const { prisma } = require('../generated/prisma-client');
const { GraphQLServer } = require('graphql-yoga');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');

function createServer() {
  return new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
      Query,
      Mutation
    },
    context: request => {
      return {
        ...request,
        prisma
      };
    },
    debug: process.env.NODE_ENV === 'development',
    resolverValidationOptions: { requireResolversForResolveType: false }
  });
}

module.exports = createServer;
