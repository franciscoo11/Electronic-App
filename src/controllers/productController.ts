import { Request, Response } from 'express';
// import {IProduct} from '../interfaces/Product';
import Product from '../models/Product';
import { handlerHttpError, handlerRespError } from '../helpers/handlerError';

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, images,stock,category } = req.body;
    if(!name || !description || !images || !stock||!category) return handlerRespError(res,'Fields name, description, images, stock, category are required',400);

    const createProduct = new Product({
      ...req.body,
      name,
      description,
      images,
      category,
      stock
    });
    return res.status(201).json(createProduct);
  } catch (error) {
    handlerHttpError(res,'ERROR_IN_CREATE_PRODUCT');
  }
};

export const getProducts = async (_req: Request, res: Response) => {
  try {
    const allProducts = await Product.find();
    return res.status(200).json(allProducts);
  } catch (error) {
    handlerHttpError(res,'ERROR_IN_GET_ALLPRODUCTS');
  }
};

export const getProductId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if(!id) return handlerRespError(res,'Id was not sended',400);

    const productById = await Product.findById(id);
    return res.status(200).json(productById); 
  } catch (error) {
    handlerHttpError(res,'ERROR_IN_GET_PRODUCT');
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if(!id) return handlerRespError(res,'Id was not sended',400);


    const productById = await Product.findByIdAndUpdate({ _id: id }, { ...req.body }, { new: true} );

    res.status(200).json(productById);
  } catch (error) {
    handlerHttpError(res,'ERROR_IN_UPDATE_PRODUCT');
  }
};

export const deleteProduct= async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if(!id) return handlerRespError(res,'Id was not sended',400);

    const saveProductToReturn = await Product.findById(id);
    await Product.findByIdAndDelete({ _id: id });

    return res.status(200).json(saveProductToReturn);
  } catch (error) {
    handlerHttpError(res,'ERROR_IN_DELETE_PRODUCT');
  }
};
