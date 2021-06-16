import { NetWorthRecordDocument } from "../models/NetWorthRecord";
import { IResolvers } from "apollo-server-azure-functions";
import {
  deleteAsync,
  getAsync,
  getByIdAsync,
  upsertAsync,
} from "../repositories/net-worth-record";

export const resolvers: IResolvers = {
  Query: {
    netWorthRecords: async (
      _root: void,
      _args: void
    ): Promise<NetWorthRecordDocument[]> => {
      const netWorthRecords = await getAsync();

      return netWorthRecords;
    },
    netWorthRecord: async (
      _root: void,
      args: { id: string }
    ): Promise<NetWorthRecordDocument> => {
      const netWorthRecord = await getByIdAsync(args.id);

      return netWorthRecord;
    },
  },
  Mutation: {
    upsertNetWorthRecord: async (
      _root: void,
      args: { netWorthRecord: NetWorthRecordDocument }
    ): Promise<string> => upsertAsync(args.netWorthRecord),
    deleteNetWorthRecord: async (
      _root: void,
      args: { id: string }
    ): Promise<void> => {
      await deleteAsync(args.id);
    },
  },
};
