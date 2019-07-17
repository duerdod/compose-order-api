const { prisma } = require('../generated/prisma-client');
const { GraphQLServer } = require('graphql-yoga');
const Query = require('./resolvers/Query');

function createServer() {
  return new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
      Query
    },
    context: { prisma },
    debug: true,
    resolverValidationOptions: { requireResolversForResolveType: false }
  });
}

module.exports = createServer;
