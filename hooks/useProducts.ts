"use client";

import { useState, useCallback } from "react";
import { Product } from "@/types/product";
import { getProducts } from "@/services/productService";

export function useProducts(
  initialProducts: Product[],
  itemsPerPage: number,
) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoreProducts = useCallback(async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const nextPage = page + 1;
      const result = await getProducts(itemsPerPage, nextPage);
      setProducts((prev) => [...prev, ...result.products]);
      setPage(nextPage);
    } catch (error) {
      console.error("Failed to fetch more products:", error);
    } finally {
      setIsLoading(false);
    }
  }, [page, itemsPerPage, isLoading]);

  return {
    products,
    isLoading,
    fetchMoreProducts,
  };
}
