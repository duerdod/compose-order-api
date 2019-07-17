const Query = {
  products(root, args, context) {
    return context.prisma.products();
  },
  product(root, args, context) {
    return context.prisma.product({ id: args.id });
  },
  user(root, args, context) {
    return context.prisma.user({ id: args.id });
  }
};

module.exports = Query;
