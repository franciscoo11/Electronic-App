import { Router } from 'express';
import authRouter from './authRoutes';
import categoryRouter from './categoryRoutes';
import productRoute from './productRoute';
import userRouter from './userRoutes';
const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/categories', categoryRouter);
router.use('/products', productRoute);

export default router;
