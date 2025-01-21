'use client'

import type React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import {Product} from "@/app/types/product";

const Cart: React.FC = () => {
    const [cartItems, setCartItems] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await axios.get<Product[]>("http://localhost:3001/cart")
                setCartItems(response.data)
                setIsLoading(false)
            } catch (err) {
                setError("Error al cargar el carrito")
                setIsLoading(false)
            }
        }

        fetchCart()
    }, [])

    if (isLoading) return <div className="text-center">Cargando carrito...</div>
    if (error) return <div className="text-center text-red-500">{error}</div>

    return (
        <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p className="text-gray-500">El carrito está vacío</p>
            ) : (
                <ul className="space-y-2">
                    {cartItems.map((item) => (
                        <li
                            key={item.id}
                            className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                        >
                            <span className="font-medium">{item.name}</span>
                            <span className="text-gray-600">${item.price.toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
            )}
            {cartItems.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="font-bold text-right">
                        Total: ${cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                    </p>
                </div>
            )}
        </div>
    )
}

export default Cart

