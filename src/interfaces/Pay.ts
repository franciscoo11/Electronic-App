import { Types } from 'mongoose';

export interface IPay {
  amount: Types.Decimal128;
  date: Date;
  doReview: boolean;
  buyer: Types.ObjectId;
  status: string;
}
