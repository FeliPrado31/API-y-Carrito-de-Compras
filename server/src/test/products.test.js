const request = require('supertest');
const app = require('../index');

describe('GET /products', () => {
    it('Debería devolver la lista de productos', async () => {
        const response = request(app).get('api/products');
        expect(response.status).toBe(200);
        expect(response.body).toEqual([
            { id: 1, name: 'Producto 1', price: 100 },
            { id: 2, name: 'Producto 2', price: 200 },
        ]);
    });
});