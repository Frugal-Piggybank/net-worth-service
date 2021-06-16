import { gql } from "apollo-server-azure-functions";
import { typeDef as NetWorthRecord } from "./net-worth-record";

const typeDef = gql`
  scalar Date
  type Query {
    _empty: String
  }
  type Mutation {
    deleteUser: Boolean
  }
`;

export default [typeDef, NetWorthRecord];
