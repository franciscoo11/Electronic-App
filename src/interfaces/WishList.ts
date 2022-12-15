import { Types } from 'mongoose';

interface IProduct {
    _id: Types.ObjectId;
    name: string;
    price: Types.Decimal128;
    description: string;
}

export interface IWishList {
    user_id: Types.ObjectId,
    products: Types.DocumentArray<IProduct>
}