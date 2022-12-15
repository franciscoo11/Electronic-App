import { Types } from 'mongoose';

interface IProducts {
  _id: Types.ObjectId,
  name: string,
  price: Types.Decimal128,
  description: string,
  stock: number,

}


export interface IPay {
  amount: Types.Decimal128;
  date: Date;
  doReview: boolean;
  buyer: Types.ObjectId;
  status: string;
  products: Types.DocumentArray<IProducts>;

}
