import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ReceiptMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Receipt {
  readonly id: string;
  readonly shopName: string;
  readonly posID?: string;
  readonly date: string;
  readonly items?: (string | null)[];
  readonly subTotal?: number;
  readonly received?: number;
  readonly change?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Receipt, ReceiptMetaData>);
  static copyOf(source: Receipt, mutator: (draft: MutableModel<Receipt, ReceiptMetaData>) => MutableModel<Receipt, ReceiptMetaData> | void): Receipt;
}