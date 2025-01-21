
import { useState, useCallback } from "react";
import api from "@/lib/api";
import { Product } from "@/app/types/product";

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
    } finally {
      setLoading(false);
    }
  }, []);

  const addToCart = useCallback(async (productId: number) => {
    setLoading(true);
    try {
      await api.post("/cart", { productId });
      await fetchCart();
    } catch (error) {
      setError("Error adding product to cart");
    } finally {
      setLoading(false);
    }
  }, [fetchCart]);

  return { cartItems, addToCart, fetchCart, loading, error };
};