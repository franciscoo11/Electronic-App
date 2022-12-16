
import {Types } from 'mongoose';

interface IReviews{
    _id:Types.ObjectId
}

export interface IProducts {
    name: string,
    description: string,
    images: Array<string>,
    reviews_id: Types.DocumentArray<IReviews>;
    stock: number
}
