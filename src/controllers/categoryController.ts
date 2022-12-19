import { Request, Response } from 'express';
import Category from '../models/Category';
import { handlerHttpError, handlerRespError } from '../helpers/handlerError';

export const getCategories = async (_req: Request, res: Response) => {
  try {
    const allCategories = await Category.find();
    res.status(200).json(allCategories);
  } catch (error) {
    handlerHttpError(res,'ERROR_GET_CATEGORIES');  
  }
};

export const getCategoryBiId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    res.status(200).json(category);
  } catch (error) {
    handlerHttpError(res,'ERROR_GET_CATEGORY_BI_ID');  
  }
};

export const addCategory = async (req: Request, res: Response) => {
  try {
    if(!req.body.name) return handlerRespError(res, 'MISSING_FIELD_NAME', 400);
    const existCategory = await Category.findOne({ name: req.body.name }); 
    if(existCategory) return handlerRespError(res, 'CATEGORY_ALREADY_EXIST', 400);

    const createCategory = new Category({
      ...req.body
    });
    const addCategory = await createCategory.save();
    res.status(201).json(addCategory);
  } catch (error) {
    handlerHttpError(res,'ERROR_ADD_CATEGORY');  
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if(!id) return handlerRespError(res, 'MISSING_FIELD_ID', 400);
    
    const modifyCategory = await Category.findByIdAndUpdate(id, req.body, { new: true }); 
    res.status(200).json(modifyCategory);
  } catch (error) {
    handlerHttpError(res,'ERROR_UPDATE_CATEGORY');  
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if(!id) return handlerRespError(res, 'MISSING_FIELD_ID', 400);

    const removeCategory = await Category.findByIdAndRemove({ _id: id }); 
    res.status(200).json({removeCategory});
  } catch (error) {
    handlerHttpError(res,'ERROR_DELETE_CATEGORY');  
  }
};
