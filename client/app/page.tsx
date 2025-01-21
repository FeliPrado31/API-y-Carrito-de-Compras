'use client'
import dynamic from "next/dynamic";

const ProductList = dynamic(() => import("@/components/ProductList"), {
    ssr: false,
});

const Cart = dynamic(() => import("@/components/Cart"), {
    ssr: false,
});

export default function Home() {
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