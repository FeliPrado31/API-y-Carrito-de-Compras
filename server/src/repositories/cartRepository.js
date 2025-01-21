let cart = [];

const addToCart = (product) => {
    cart.push(product);
    return cart;
};

const getCart = () => {
    return cart;
};

const clearCart = () => {
    cart = [];
};

module.exports = {
    addToCart,
    getCart,
    clearCart,
};