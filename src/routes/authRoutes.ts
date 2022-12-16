import { Router } from 'express';
import { login, profile, register } from '../controllers/authController';
import { adminRoute } from '../middlewares/jwt';
const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', adminRoute, profile);

export default router;