"use client";

import { Product } from "@/types/product";
import ProductList from "./ProductList";
import { useProducts } from "@/hooks/useProducts";

interface ProductLoaderProps {
  initialProducts: Product[];
  itemsPerPage: number;
}

export default function ProductLoader({
  initialProducts,
  itemsPerPage,
}: ProductLoaderProps) {
  const { products, isLoading, fetchMoreProducts } = useProducts(
    initialProducts,
    itemsPerPage
  );

  return (
    <>
      <ProductList products={products} />
      <div className="my-[40px] text-center">
        <button
          onClick={fetchMoreProducts}
          disabled={isLoading}
          className={`bg-white cursor-pointer w-[163px] h-[40px] px-[10px] py-[10px] text-charcoal-black border border-harcoal-black text-[16px] font-[500] rounded-[80px] ${
            isLoading
              ? "cursor-not-allowed"
              : "hover:bg-blue-600"
          }`}
        >
          {isLoading ? "Loading..." : "Show More"}
        </button>
      </div>
    </>
  );
}
