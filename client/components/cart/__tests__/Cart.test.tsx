import React from 'react';
import { render, screen } from '@testing-library/react';
import Cart from '../Cart';
import { useCart } from '@/hooks/useCart';

jest.mock('@/hooks/useCart');

describe('Cart', () => {
    const mockCartItems = [
        { id: 1, name: 'Producto 1', price: 60 },
        { id: 2, name: 'Producto 2', price: 100 },
    ];

    beforeEach(() => {
        (useCart as jest.Mock).mockReturnValue({
            cartItems: mockCartItems,
            loading: false,
            error: null,
            fetchCart: jest.fn(),
        });
    });

    it('debería mostrar los productos en el carrito', () => {
        render(<Cart />);
        expect(screen.getByText('Producto 1')).toBeInTheDocument();
        expect(screen.getByText('Producto 2')).toBeInTheDocument();
    });

    it('debería mostrar un mensaje si el carrito está vacío', () => {
        (useCart as jest.Mock).mockReturnValue({
            cartItems: [],
            loading: false,
            error: null,
            fetchCart: jest.fn(),
        });
        render(<Cart />);
        expect(screen.getByText('El carrito está vacío')).toBeInTheDocument();
    });
});