import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="flex flex-wrap gap-[17px] justify-center">
    {products.map((product, i) => (
      <div key={i} className="max-w-[262px]">
        <ProductCard product={product} />
      </div>
    ))}
  </div>
  );
}
