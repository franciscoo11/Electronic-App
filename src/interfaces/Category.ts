
import {Types } from 'mongoose';

interface IProducts{
    _id:Types.ObjectId
}

export interface ICategory {
    products_id:Types.DocumentArray<IProducts>,
    name:string
}
