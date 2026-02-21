import express from 'express';
import Product from '../models/product.model'
const router = express.Router();
import {getProduct} from '../controllers/product.controller'


router.get('/',getProducts);

router.get("/:id", getProduct);

export default router;