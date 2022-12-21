import { Router } from 'express';
import { initPayment, payFailure, paySuccess } from '../controllers/paymentController';

const router = Router();

router.post('/checkoutmp', initPayment);

router.get('/success', paySuccess);

router.get('/failure', payFailure);

export default router;