import { Router } from 'express';
import { login, profile, register } from '../controllers/authController';
import { tokenValidation } from '../middlewares/jwt';
const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', tokenValidation, profile);

export default router;