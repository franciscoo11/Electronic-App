import { Router } from 'express';
import authRouter from './authRoutes';
import categoryRouter from './categoryRoutes';
import userRouter from './userRoutes';
import reviewRouter from './reviewRoutes';

const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/categories', categoryRouter);
router.use('/reviews', reviewRouter);

export default router;
