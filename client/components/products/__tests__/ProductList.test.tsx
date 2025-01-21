
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductList from '../ProductList';
import { useProducts } from '@/hooks/useProducts';
import { useCart } from '@/hooks/useCart';


jest.mock('@/hooks/useProducts');
jest.mock('@/hooks/useCart');


describe('ProductList', () => {
    const mockProducts = [
        { id: 1, name: 'Producto 1', price: 60 },
        { id: 2, name: 'Producto 2', price: 100 },
    ];

    beforeEach(() => {
        (useProducts as jest.Mock).mockReturnValue({
            products: mockProducts,
            loading: false,
            error: null,
        });

        (useCart as jest.Mock).mockReturnValue({
            addToCart: jest.fn(),
        });
    });

    it('debería mostrar la lista de productos', () => {
        render(<ProductList />);
        expect(screen.getByText('Producto 1')).toBeInTheDocument();
        expect(screen.getByText('Producto 2')).toBeInTheDocument();
    });

    it('debería llamar a addToCart cuando se hace clic en el botón "Agregar al carrito"', () => {
        const { addToCart } = useCart();
        render(<ProductList />);
        fireEvent.click(screen.getAllByText('Agregar al carrito')[0]);
        expect(addToCart).toHaveBeenCalledWith(1);
    });
});