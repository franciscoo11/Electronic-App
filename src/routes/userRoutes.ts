import { Router } from 'express';
import { getUsers, createUser, updateUser, deleteUser, getUser } from '../controllers/userController';
import { adminRoute } from '../middlewares/jwt';

const router = Router();

router.post('/', createUser);
router.get('/', adminRoute, getUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
