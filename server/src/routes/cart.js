const express = require('express');
const router = express.Router();

const products = require('../data/products.json');
let cart = [];


router.post('/', (req, res) => {
    const { productId } = req.body;

    if (!productId) {
        return res.status(400).json({ error: 'Product ID required' });
    }


    const product = products.find(p => p.id === productId);

    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }


    cart.push(product);
    res.json({ message: 'Product added to cart', cart });
});


router.get('/', (req, res) => {
    res.json(cart);
});

module.exports = router;