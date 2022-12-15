
import {Types } from 'mongoose';

interface IReviews{
    id:Types.ObjectId
}

export interface IUProducts {
    name: string,
    description: string,
    images: Array<string>,
    reviews_id: Types.DocumentArray<IReviews>;
    stock: number
}