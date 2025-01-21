const products = require('../data/products.json');

let cart = [];

const addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    if (!product) throw new Error('Product not found');
    cart.push(product);
    return cart;
};

const getCart = () => {
    return cart;
};

module.exports = {
    addToCart,
    getCart,
};