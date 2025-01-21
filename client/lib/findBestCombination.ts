interface Product {
    id: number;
    name: string;
    price: number;
}

export const findBestCombination = (products: Product[], budget: number): Product[] => {
    const n = products.length;
    const dp: number[][] = Array.from({ length: n + 1 }, () => Array(budget + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        const { price } = products[i - 1];
        for (let j = 0; j <= budget; j++) {
            if (price <= j) {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - price] + price);
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    let j = budget;
    const selectedProducts: Product[] = [];
    for (let i = n; i > 0; i--) {
        if (dp[i][j] !== dp[i - 1][j]) {
            selectedProducts.push(products[i - 1]);
            j -= products[i - 1].price;
        }
    }

    return selectedProducts;
};