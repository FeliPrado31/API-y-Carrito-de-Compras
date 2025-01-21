const products = require('../data/products.json');

const getProducts = () => {
    return products;
};

const getProductById = (productId) => {
    const product = products.find(p => p.id === productId);
    if (!product) throw new Error('Product not found');
    return product;
};

module.exports = {
    getProducts,
    getProductById,
};