import { GraphQLScalarType } from "graphql";
import { Kind } from "graphql/language";
import { resolvers as netWorthRecordResolvers } from "./net-worth-record";

const resolvers = {
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return new Date(value); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT || ast.kind === Kind.STRING) {
        return new Date(ast.value); // ast value is always in string format
      }
      return null;
    },
  }),
  Mutation: {
    // deleteUser: async (
    //   root: void,
    //   args: { id: string },
    //   ctx: ApolloContext
    // ): Promise<boolean> => {
    //   const userId = checkAuthentication(ctx);
    //   try {
    //     await deleteUserCategories(userId);
    //     await deleteUserLineItems(userId);
    //   } catch (err) {
    //     console.error(err);
    //   }
    //   return true;
    // },
  },
};

export default [resolvers, netWorthRecordResolvers];
