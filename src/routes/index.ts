import { Router } from 'express';
import authRouter from './authRoutes';
import categoryRouter from './categoryRoutes';
import productRoute from './productRoute';
import userRouter from './userRoutes';
import reviewRouter from './reviewRoutes';
import auth from './authGoogle';

const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/categories', categoryRouter);
router.use('/products', productRoute);
router.use('/reviews', reviewRouter);
router.use('/login',auth);

export default router;
