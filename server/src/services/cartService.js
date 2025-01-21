const cartRepository = require('../repositories/cartRepository');
const products = require('../data/products.json');

const addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    if (!product) throw new Error('Product not found');
    return cartRepository.addToCart(product);
};

const getCart = () => {
    return cartRepository.getCart();
};

module.exports = {
    addToCart,
    getCart,
};