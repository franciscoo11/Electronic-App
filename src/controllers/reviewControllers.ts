import { handlerRespError, handlerHttpError } from '../helpers/handlerError';
import Review from '../models/Review';
import User from '../models/User';
import Product from '../models/Product';
import { Request, Response } from 'express';

export const getReviews = async ( _req: Request, res: Response ) => {
  try {
    const allReviews = await Review.find().populate('Product').populate('User');
    return res.status(200).json(allReviews);    
  } catch (error) {
    handlerHttpError(res,'ERROR_GET_ALLREVIEWS');    
  }
};

export const getReviewById = async ( req: Request, res: Response ) => {
  try {
    const { id } = req.params;
    if(!id) return handlerRespError(res, 'MISSING_FIELD_ID', 400);
    const review = await Review.findById(id).populate('Product');
    return res.status(200).json(review);    
  } catch (error) {
    handlerHttpError(res,'ERROR_GET_REVIEW_BYID');    
  }
};

export const addReview = async ( req: Request, res: Response ) => {
  try {
    const { id } = req.params;
    const createReview = await Review.create(req.body); 

    const product = await Product.findById(id);
    createReview.product = product?.id;

    const user= await User.findOne({ email: req.body.users.email });
    createReview.user = user?.id;

    if(!createReview) return handlerRespError(res,'Review has not been created', 400);
    
    const saveReview = await createReview.save();
    const addReviewToProduct = await Product.findByIdAndUpdate(id, {
      $addToSet: { reviews_id: saveReview}
    });
    res.status(201).json(addReviewToProduct);
  } catch (error) {
    handlerHttpError(res,'ERROR_ADD_REVIEW');    
  }
};

export const deleteReview = async ( req: Request, res: Response ) => {
  try {
    const { id } = req.params;
    const removeReview = await Review.findByIdAndRemove({ _id: id });
    res.status(200).json(removeReview);
  } catch (error) {
    handlerHttpError(res, 'ERROR_DELETE_REVIEW');  
  }
};
