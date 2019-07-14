// const { prisma } = require('../../generated/prisma-client');

const Query = {
  products(root, args, context) {
    return context.prisma.products();
  },
  product(root, args, context) {
    return context.prisma.product({ where: { id: args.Id } });
  }
};

module.exports = Query;
