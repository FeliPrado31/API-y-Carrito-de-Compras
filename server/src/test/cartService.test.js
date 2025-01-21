const cartService = require('../services/cartService');
const cartRepository = require('../repositories/cartRepository');

describe('Cart Service', () => {
    beforeEach(() => {
        cartRepository.clearCart(); // Limpiar el carrito antes de cada test
    });

    it('Debería agregar un producto al carrito', () => {
        const cart = cartService.addToCart(1);
        expect(cart).toContainEqual({ id: 1, name: 'Producto 1', price: 60 }); // Corregir el precio
    });

    it('Debería lanzar un error si el producto no existe', () => {
        expect(() => cartService.addToCart(999)).toThrow('Product not found');
    });
});