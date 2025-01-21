// pages/index.tsx
import type { NextPage } from 'next';
import ProductList from "@/app/components/ProductList";
import Cart from "@/app/components/Cart";

const Home: NextPage = () => {
  return (
      <div>
        <ProductList />
        <Cart />
      </div>
  );
};

export default Home;