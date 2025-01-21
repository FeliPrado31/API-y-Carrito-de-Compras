'use client'

import { useState, useEffect } from "react";
import api from "@/lib/api";
import { Product } from "@/app/types/product";

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get<Product[]>("/products");
                setProducts(response.data);
            } catch (error) {
                setError("Error fetching products");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return { products, loading, error };
};