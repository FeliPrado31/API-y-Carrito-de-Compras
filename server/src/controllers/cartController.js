const cartService = require('../services/cartService');
const { ERROR_MESSAGES, STATUS_CODES } = require('../config/constants');

const addToCart = (req, res) => {
    const { productId } = req.body;

    if (!productId) {
        return res.status(STATUS_CODES.BAD_REQUEST).json({ error: ERROR_MESSAGES.PRODUCT_ID_REQUIRED });
    }

    try {
        const cart = cartService.addToCart(productId);
        res.json({ message: 'Product added to cart', cart });
    } catch (error) {
        res.status(STATUS_CODES.NOT_FOUND).json({ error: error.message });
    }
};

const getCart = (req, res) => {
    const cart = cartService.getCart();
    res.json(cart);
};

module.exports = {
    addToCart,
    getCart,
};