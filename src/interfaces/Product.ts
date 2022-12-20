import {Types } from 'mongoose';

interface IReviews{
    _id:Types.ObjectId;
}

interface ICategory {
    _id:Types.ObjectId;
}

export interface IProducts {
    name: string;
    category?: Types.DocumentArray<ICategory>;
    description: string;
    images: Array<string>;
    reviews?: Types.DocumentArray<IReviews>;
    stock: number;
    price: number;
}
