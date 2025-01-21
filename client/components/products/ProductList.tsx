'use client'

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useProducts } from "@/hooks/useProducts";
import { useCart } from "@/hooks/useCart";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { ErrorAlert } from "@/components/ErrorAlert";
import { useState } from "react";
import {Product} from "@/app/types/product";
import {findBestCombination} from "@/lib/findBestCombination";

const ProductList = () => {
    const { products, loading, error } = useProducts();
    const { addToCart } = useCart();
    const [budget, setBudget] = useState<number>(0);
    const [selectedCombination, setSelectedCombination] = useState<Product[]>([]);
    const [isFinding, setIsFinding] = useState<boolean>(false);

    const handleAddToCart = async (productId: number) => {
        await addToCart(productId);
    };

    const handleFindCombination = async () => {
        setIsFinding(true);
        try {
            const bestCombination = findBestCombination(products, budget);
            setSelectedCombination(bestCombination);
        } catch (err) {
            console.error("Error al encontrar la mejor combinación:", err);
        } finally {
            setIsFinding(false);
        }
    };

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorAlert message={error} />;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Lista de Productos</h1>

            {/* Input para el presupuesto */}
            <div className="mb-4 ">
                <Input
                    type="number"
                    placeholder="Ingrese su presupuesto"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="mr-2"
                />
                <Button onClick={handleFindCombination} disabled={isFinding} className={"mt-5"}>
                    {isFinding ? "Buscando..." : "Encontrar Mejor Combinación"}
                </Button>
            </div>

            {/* Mostrar la mejor combinación */}
            {selectedCombination.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Mejor Combinación</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {selectedCombination.map((product) => (
                            <Card key={product.id} className="flex flex-col justify-between">
                                <CardContent className="pt-4">
                                    <h2 className="text-xl font-semibold">{product.name}</h2>
                                    <p className="text-gray-600">Precio: ${product.price}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <p className="mt-2 font-medium">
                        Total: ${selectedCombination.reduce((sum, product) => sum + product.price, 0)}
                    </p>
                </div>
            )}

            {/* Lista de productos */}
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