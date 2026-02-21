import express from 'express';
import Product from '../models/product.model'

const getProducts = async (req,res) =>{
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
};

const getProduct = async(req,res) =>{
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export default {getProducts, getProduct};