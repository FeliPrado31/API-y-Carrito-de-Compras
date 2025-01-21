const request = require('supertest');
const app = require('../index');

describe('Cart Controller', () => {
    it('Debería agregar un producto al carrito', async () => {
        const response = await request(app)
            .post('/api/cart') // Corregir la ruta
            .send({ productId: 1 });

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Product added to cart');
        expect(response.body.cart).toContainEqual({ id: 1, name: 'Producto 1', price: 60 }); // Corregir el precio
    });

    it('Debería devolver un error si el producto no existe', async () => {
        const response = await request(app)
            .post('/api/cart') // Corregir la ruta
            .send({ productId: 999 });

        expect(response.status).toBe(404);
        expect(response.body.error).toBe('Product not found');
    });
});