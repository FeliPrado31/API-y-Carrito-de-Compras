const { body, validationResult } = require('express-validator');
const cartService = require('../services/cartService');
const { STATUS_CODES } = require('../config/config');
const logger = require('../config/logger');

const addToCart = [
    body('productId').isInt().withMessage('Product ID must be an integer'),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            logger.warn('Validation errors', { errors: errors.array() });
            return res.status(STATUS_CODES.BAD_REQUEST).json({ errors: errors.array() });
        }

        const { productId } = req.body;

        try {
            const cart = cartService.addToCart(productId);
            logger.info('Product added to cart', { productId, timestamp: new Date() });
            res.json({ message: 'Product added to cart', cart });
        } catch (error) {
            logger.error('Error adding product to cart', { error: error.message });
            res.status(STATUS_CODES.NOT_FOUND).json({ error: error.message });
        }
    },
];

const getCart = (req, res) => {
    const cart = cartService.getCart();
    res.json(cart);
};

module.exports = {
    addToCart,
    getCart,
};