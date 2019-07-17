const Query = {
  products(root, args, ctx) {
    return ctx.prisma.products();
  },
  async product(root, args, context) {
    return context.prisma.product({ id: args.id });
  }
};

module.exports = Query;
