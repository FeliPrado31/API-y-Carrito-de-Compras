const request = require('supertest');
const app = require('../app');

describe('POST /cart', () => {
    it('Debería agregar un producto al carrito', async () => {
        const response = await request(app)
            .post('/cart')
            .send({ productId: 1 });

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Product added to cart');
        expect(response.body.cart).toContainEqual({ id: 1, name: 'Producto 1', price: 100 });
    });

    it('Debería devolver un error si no se proporciona el ID del producto', async () => {
        const response = await request(app)
            .post('/cart')
            .send({});

        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Product ID required');
    });

    it('Debería devolver un error si el producto no existe', async () => {
        const response = await request(app)
            .post('/cart')
            .send({ productId: 999 });

        expect(response.status).toBe(404);
        expect(response.body.error).toBe('Product not found');
    });
});

describe('GET /cart', () => {
    it('Debería devolver el carrito con los productos agregados', async () => {
        const response = await request(app).get('/cart');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.any(Array));
    });
});