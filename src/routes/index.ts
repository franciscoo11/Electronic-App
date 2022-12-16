import { Router } from 'express';
import authRouter from './authRoutes';
import categoryRouter from './categoryRoutes';
import productRoute from './productRoute';
import userRouter from './userRoutes';
import reviewRouter from './reviewRoutes';

const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/categories', categoryRouter);
router.use('/products', productRoute);
router.use('/reviews', reviewRouter);

export default router;
