import { useEffect } from 'react';
import { useCart } from '@/hooks/useCart';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ErrorAlert } from '@/components/ErrorAlert';
import { Button } from '@/components/ui/button';

const Cart = () => {
    const { cartItems, fetchCart, loading, error } = useCart();

    useEffect(() => {
        fetchCart();
    }, [fetchCart]);

    const handleRefreshCart = () => {
        fetchCart();
    };

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorAlert message={error} />;

    return (
        <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Carrito de Compras</h2>
                <Button
                    onClick={handleRefreshCart}
                    variant="outline"
                    size="sm"
                >
                    Actualizar
                </Button>
            </div>
            {cartItems.length === 0 ? (
                <p className="text-gray-500">El carrito está vacío</p>
            ) : (
                <ul className="space-y-2">
                    {cartItems.map((item, index) => (
                        <li
                            key={`${item.id}-${index}`}
                            className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                        >
                            <span className="font-medium">{item.name}</span>
                            <span className="text-gray-600">${item.price.toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;