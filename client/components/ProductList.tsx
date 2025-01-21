'use client'

import type React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import type { Product } from "../types/product"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [budget, setBudget] = useState<number>(0)
    const [bestCombination, setBestCombination] = useState<Product[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get<Product[]>("http://localhost:3001/products")
                setProducts(response.data)
                console.log(response.data)
            } catch (error) {
                console.error("Error fetching products:", error)
            }
        }

        fetchProducts()
    }, [])

    const addToCart = async (productId: number) => {
        try {
            await axios.post("http://localhost:3001/cart", { productId })
            console.log(`Product ${productId} added to cart`)
        } catch (error) {
            console.error("Error adding product to cart:", error)
        }
    }

    const calculateBestCombination = () => {
        const dp: number[][] = Array(products.length + 1)
            .fill(0)
            .map(() => Array(budget + 1).fill(0))

        for (let i = 1; i <= products.length; i++) {
            for (let j = 0; j <= budget; j++) {
                if (products[i - 1].price <= j) {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - products[i - 1].price] + products[i - 1].price)
                } else {
                    dp[i][j] = dp[i - 1][j]
                }
            }
        }

        let i = products.length
        let j = budget
        const selectedProducts: Product[] = []

        while (i > 0 && j > 0) {
            if (dp[i][j] !== dp[i - 1][j]) {
                selectedProducts.push(products[i - 1])
                j -= products[i - 1].price
            }
            i--
        }

        setBestCombination(selectedProducts)
    }

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
                            <Button onClick={() => addToCart(product.id)} className="w-full">
                                Agregar al carrito
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <div className="mt-8">
                <Card>
                    <CardContent className="pt-4">
                        <h2 className="text-xl font-semibold mb-4">Calcular Mejor Combinación</h2>
                        <div className="flex items-center space-x-4">
                            <Input
                                type="number"
                                placeholder="Ingrese su presupuesto"
                                value={budget}
                                onChange={(e) => setBudget(Number(e.target.value))}
                                className="flex-grow"
                            />
                            <Button onClick={calculateBestCombination}>Calcular Mejor Combinación</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {bestCombination.length > 0 && (
                <div className="mt-8">
                    <Card className="bg-green-50">
                        <CardContent className="pt-4">
                            <h2 className="text-xl font-semibold mb-4">Mejor Combinación</h2>
                            <ul className="space-y-2">
                                {bestCombination.map((product) => (
                                    <li key={product.id} className="flex justify-between">
                                        <span>{product.name}</span>
                                        <span>${product.price}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 font-semibold">
                                Total: ${bestCombination.reduce((sum, product) => sum + product.price, 0)}
                            </p>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    )
}

export default ProductList

