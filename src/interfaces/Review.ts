import { Types } from 'mongoose';

interface User {
    _id: Types.ObjectId;
}

export interface IReview {
    punctuation: number,
    opinion?: string,
    user: Types.DocumentArray<User>
    product: Types.ObjectId
}