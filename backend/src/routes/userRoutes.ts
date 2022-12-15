import { Router } from 'express';
import { getUsers, createUser, updateUser, deleteUser, getUser } from '../controllers/userController';

const router = Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
