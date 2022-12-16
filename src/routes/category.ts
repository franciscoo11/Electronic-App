import { Router } from 'express';
import { addCategory, getCategories, deleteCategory, getCategoryBiId, updateCategory } from '../controllers/categoryController';
const router = Router();

router.post('/', addCategory);
router.get('/', getCategories);
router.get('/:id', getCategoryBiId);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

export default router;