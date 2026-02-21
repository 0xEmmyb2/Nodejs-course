import express from 'express';
import Product from '../models/product.model'
const router = express.Router();
import {getProducts, getProduct, createProduct} from '../controllers/product.controller'


router.get('/', getProducts);

router.get("/:id", getProduct);

router.post("/", createProduct);

export default router;