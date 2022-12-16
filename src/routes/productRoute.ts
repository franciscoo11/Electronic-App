import { Router } from 'express';
import { createProduct,getProducts,getProductId,updateProduct,deleteProduct } from '../controllers/productController'; 
const router = Router();

router.post('/', createProduct);
router.get('/', getProducts);
router.get('/:id', getProductId);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;