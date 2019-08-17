/* eslint-disable */
const { ApolloServer } = require('apollo-server-express');
const { prisma } = require('../generated/prisma-client/index');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const typeDefs = require('./schema');

const corsOptions = {
  origin: '*',
  credentials: true
};

function graphServer() {
  return new ApolloServer({
    cors: corsOptions,
    typeDefs,
    resolvers: {
      Query,
      Mutation
    },
    // Surfaces prisma db.
    context: ({ req, res }) => ({
      ...req,
      ...res,
      prisma
    })
    context: request => {
      // Used to access client headers on each db request.
      return {
        ...request,
        prisma
      };
    },
    debug: process.env.NODE_ENV === 'development',
    resolverValidationOptions: { requireResolversForResolveType: false }
  });
}

module.exports = graphServer;
