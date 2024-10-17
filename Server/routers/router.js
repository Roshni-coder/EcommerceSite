import express from 'express';
import { userSignup,userLogin } from '../Controoler/userControler.js';
import { getProducts,getProductsById } from '../Controoler/ProductControler.js';

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login',userLogin);


router.get('/products',getProducts);
router.get('/product/:id',getProductsById)



export default router;