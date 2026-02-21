const express = require('express');
const router = express.Router();

const { 
    getProducts, 
    getProduct, 
    createProduct, 
    updateProduct, 
    deleteProduct 
} = require('../controllers/product.controller.js');


router.get('/', getProducts);

router.get("/:id", getProduct);

router.post("/", createProduct);

router.put("/:id", updateProduct);

//Deleting a product
router.delete("/:id", deleteProduct);


module.exports = router;