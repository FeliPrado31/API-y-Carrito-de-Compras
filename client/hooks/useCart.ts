'use client'

import { useState, useCallback } from "react";
import api from "@/lib/api";
import { Product } from "@/app/types/product";
import { toast } from 'react-toastify';

export const useCart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCart = useCallback(async () => {
    setLoading(true);
    try {
      const response = await api.get<Product[]>("/cart");
      setCartItems(response.data);
    } catch (error) {
      setError("Error fetching cart");
      toast.error("Error fetching cart");
      console.error(error)
    } finally {
      setLoading(false);
    }
  }, []);

  const addToCart = useCallback(async (productId: number) => {
    setLoading(true);
    try {
      await api.post("/cart", { productId });
      toast.success("Product added to cart");
    } catch (error) {
      setError("Error adding product to cart");
      toast.error("Error adding product to cart");
      console.error(error)
    } finally {
      setLoading(false);
    }
  }, [fetchCart]);

  return { cartItems, addToCart, fetchCart, loading, error };
};