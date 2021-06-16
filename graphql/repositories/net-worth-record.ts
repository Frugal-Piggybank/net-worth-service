import { QuerySnapshot } from "@google-cloud/firestore";
import { firestore } from "../index";
import {
  firestoreConverter,
  NetWorthRecordDocument,
} from "../models/NetWorthRecord";

const DB_COLLECTION = "net-worth-records";

const getNetWorthRecordsCollection = () =>
  firestore.collection(DB_COLLECTION).withConverter(firestoreConverter);

const mapSnapshot = (snapshot: QuerySnapshot<NetWorthRecordDocument>) => {
  return snapshot.docs.map((doc) => doc.data());
};

export const getAsync = async (): Promise<NetWorthRecordDocument[]> => {
  try {
    const snapshot = await getNetWorthRecordsCollection().get();

    const netWorthRecords = mapSnapshot(snapshot);

    return netWorthRecords;
  } catch (error) {
    console.error(error);
  }
};

export const getByIdAsync = async (
  id: string
): Promise<NetWorthRecordDocument> => {
  try {
    const snapshot = await getNetWorthRecordsCollection().doc(id).get();

    const netWorthRecord = snapshot.data();

    return netWorthRecord;
  } catch (error) {
    console.error(error);
  }
};

export const deleteAsync = async (id: string): Promise<void> => {
  try {
    const netWorthRecordDocument = getNetWorthRecordsCollection().doc(id);

    await netWorthRecordDocument.delete();
  } catch (error) {
    console.error(error);
  }
};

const _updateNetWorthRecordAsync = async (
  netWorthRecord: NetWorthRecordDocument
): Promise<string> => {
  try {
    const netWorthRecordDocument = getNetWorthRecordsCollection().doc(
      netWorthRecord.id
    );

    await netWorthRecordDocument.update(netWorthRecord);

    return "Successfully updated";
  } catch (error) {
    console.error(error);
  }
};

const _createNetWorthRecordAsync = async (
  netWorthRecord: NetWorthRecordDocument
): Promise<string> => {
  try {
    const netWorthRecordDocument = await getNetWorthRecordsCollection().add(
      netWorthRecord
    );

    return netWorthRecordDocument.id;
  } catch (error) {
    console.error(error);
  }
};

export const upsertAsync = async (
  netWorthRecord: NetWorthRecordDocument
): Promise<string> =>
  netWorthRecord.id
    ? _updateNetWorthRecordAsync(netWorthRecord)
    : _createNetWorthRecordAsync(netWorthRecord);
