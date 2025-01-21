'use client'

import { useState, useEffect } from "react";
import api from "@/lib/api";
import { Product } from "@/app/types/product";
import {toast} from "react-toastify";

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
                toast.error("Error adding product to cart");
                console.error(error)
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return { products, loading, error };
};