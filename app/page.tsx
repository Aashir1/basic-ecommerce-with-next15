import { getProducts } from "@/services/productService";
import ProductLoader from "@/components/product/ProductLoader";
import { Product } from "@/types/product";

export default async function ProductsPage() {
  const itemsPerPage = 6;
  let initialProducts: Product[] = [];
  let error = null;

  try {
    const result = await getProducts(itemsPerPage, 1);
    initialProducts = result.products;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    error = "Failed to load products. Please try again later.";
  }

  return (
    <main className="max-w-[1120px] w-full mx-auto px-[10px] py-[60px]">
      {error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : (
        <ProductLoader
          initialProducts={initialProducts}
          itemsPerPage={itemsPerPage}
        />
      )}
    </main>
  );
}
