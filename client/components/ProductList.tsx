'use client'

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {useProducts} from "@/hooks/useProducts";
import {useCart} from "@/hooks/useCart";
import {LoadingSpinner} from "@/components/LoadingSpinner";
import {ErrorAlert} from "@/components/ErrorAlert";

const ProductList = () => {
    const { products, loading, error } = useProducts();
    const { addToCart } = useCart();

    const handleAddToCart = async (productId: number) => {
        await addToCart(productId);

    };

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorAlert message={error} />;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Lista de Productos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    <Card key={product.id} className="flex flex-col justify-between">
                        <CardContent className="pt-4">
                            <h2 className="text-xl font-semibold">{product.name}</h2>
                            <p className="text-gray-600">Precio: ${product.price}</p>
                        </CardContent>
                        <CardFooter>
                            <Button
                                onClick={() => handleAddToCart(product.id)}
                                className="w-full"
                            >
                                Agregar al carrito
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ProductList;