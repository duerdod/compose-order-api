const Mutation = {
  async createAccount(root, { name, password }, context) {
    const user = await context.prisma.createUser({ name, password });
    console.log(user);
  },
  login(root, { name, password }, context, info) {
    console.log(context);
  }
};

module.exports = Mutation;
