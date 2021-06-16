import {
  FirestoreDataConverter,
  DocumentData,
  QueryDocumentSnapshot,
} from "@google-cloud/firestore";

export interface NetWorthRecordDocument {
  id: string;
  month: Date;
  expenses: number;
  savings: number;
  netWorth: number;
}

export const firestoreConverter: FirestoreDataConverter<NetWorthRecordDocument> =
  {
    toFirestore: (netWorthRecord: NetWorthRecordDocument): DocumentData =>
      netWorthRecord,
    fromFirestore: (snapshot: QueryDocumentSnapshot<DocumentData>) => {
      const data = snapshot.data();

      return {
        id: snapshot.id,
        month: data.month,
        expenses: data.expenses,
        savings: data.savings,
        netWorth: data.netWorth,
      } as NetWorthRecordDocument;
    },
  };
