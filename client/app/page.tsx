'use client'
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ProductList = dynamic(() => import("@/components/products/ProductList"), {
    ssr: false,
});

const Cart = dynamic(() => import("@/components/cart/Cart"), {
    ssr: false,
});

export default function Home() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8">Tienda Online</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ProductList />
                <Cart />
            </div>
        </div>
    );
}