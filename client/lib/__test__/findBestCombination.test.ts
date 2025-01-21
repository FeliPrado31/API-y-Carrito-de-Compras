import { findBestCombination } from '@/lib/findBestCombination';

describe('findBestCombination', () => {
    const products = [
        { id: 1, name: 'Producto 1', price: 60 },
        { id: 2, name: 'Producto 2', price: 100 },
        { id: 3, name: 'Producto 3', price: 120 },
        { id: 4, name: 'Producto 4', price: 70 },
    ];

    it('debería devolver la mejor combinación de productos sin exceder el presupuesto', () => {
        const budget = 150;
        const result = findBestCombination(products, budget);

        expect(result).toContainEqual({ id: 1, name: 'Producto 1', price: 60 });
        expect(result).toContainEqual({ id: 4, name: 'Producto 4', price: 70 });

        const total = result.reduce((sum, product) => sum + product.price, 0);
        expect(total).toBeLessThanOrEqual(budget);
    });
});