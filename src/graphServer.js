const { prisma } = require('../generated/prisma-client');
const { GraphQLServer } = require('graphql-yoga');
const Query = require('./resolvers/Query');
const { typeDefs } = require('../generated/prisma-client/prisma-schema');

function createServer() {
  return new GraphQLServer({
    debug: true,
    typeDefs,
    resolvers: {
      Query
    },
    context: {
      prisma
    },
    resolverValidationOptions: { requireResolversForResolveType: false }
  });
}

module.exports = createServer;
