const express = require('express');
const router = express.Router();

// Changed to require and added updateProduct to the list
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