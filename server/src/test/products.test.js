const request = require('supertest');
const app = require('../index');

describe('GET /products', () => {
    it('Debería devolver la lista de productos', async () => {
        const response = await request(app).get('/api/products'); // Agregar await y corregir la ruta
        expect(response.status).toBe(200);
        expect(response.body).toEqual([
            { id: 1, name: 'Producto 1', price: 60 },
            { id: 2, name: 'Producto 2', price: 100 },
            { id: 3, name: 'Producto 3', price: 120 },
            { id: 4, name: 'Producto 4', price: 70 },
        ]);
    });
});