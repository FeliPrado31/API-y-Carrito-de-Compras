const cartRepository = require('../repositories/cartRepository');
const products = require('../data/products.json');

const addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    if (!product) {
        throw new Error('Product not found');
    }

    const cart = cartRepository.getCart();

    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        throw new Error('Product already in cart');
    }

    return cartRepository.addToCart(product);
};

const getCart = () => {
    return cartRepository.getCart();
};

module.exports = {
    addToCart,
    getCart,
};