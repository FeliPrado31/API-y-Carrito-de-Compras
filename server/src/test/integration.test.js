const request = require('supertest');
const app = require('../index');

describe('Integration Tests', () => {
    it('Debería agregar un producto al carrito y luego obtenerlo', async () => {
        const addResponse = await request(app)
            .post('/api/cart')
            .send({ productId: 1 });

        expect(addResponse.status).toBe(200);
        expect(addResponse.body.message).toBe('Product added to cart');

        const getResponse = await request(app).get('/api/cart');
        expect(getResponse.status).toBe(200);
        expect(getResponse.body).toContainEqual({ id: 1, name: 'Producto 1', price: 60 });
    });
});