import { gql } from "apollo-server-azure-functions";

export const typeDef = gql`
  type NetWorthRecord {
    id: ID!
    month: Date!
    expenses: Int!
    savings: Int!
    netWorth: Int!
    # savingsRate?: Int
    # config?: { withDrawalRate: Int, growthRate: Int, futureMonthlyExpenses: Int }
  }

  input UpsertNetWorthRecordInput {
    id: ID
    month: Date!
    expenses: Int!
    savings: Int!
    netWorth: Int!
  }

  extend type Mutation {
    upsertNetWorthRecord(netWorthRecord: UpsertNetWorthRecordInput!): String!
    deleteNetWorthRecord(id: ID!): Boolean
  }

  extend type Query {
    netWorthRecords: [NetWorthRecord!]!
    netWorthRecord(id: ID!): NetWorthRecord!
  }
`;
