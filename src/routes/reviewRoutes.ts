import { Router } from 'express';
import {  addReview, deleteReview, getReviewById, getReviews } from '../controllers/reviewControllers';
const router = Router();

router.post('/:id', addReview);
router.get('/', getReviews);
router.get('/:id', getReviewById);
router.delete('/:id', deleteReview);

export default router;