import { Router } from 'express';
import { userRegister } from '../controllers/registerController';

const router = Router();

router.post('/register', userRegister);
// router.get('/login', registerController);
// router.put('/:id', registerController);

export default router;
