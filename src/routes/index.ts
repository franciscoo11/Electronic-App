import { Router } from 'express';
import authRouter from './authRoutes';
import categoryRouter from './categoryRoutes';
import userRouter from './userRoutes';
const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/categories', categoryRouter);

export default router;
