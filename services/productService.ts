import { v5 as uuidv5 } from "uuid";
import request from "@/lib/request";
import { PaginatedResponse, Product } from "@/types/product";

const NAMESPACE = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";

export async function getProducts(
  limit: number = 10,
  page: number = 1
): Promise<PaginatedResponse> {
  try {
    const response = await request.get<Product[]>("/products", {
      params: { _page: page, _limit: limit },
    });

    // Map the response to our Product type
    const products = response.data.map((item: Product) => ({
      uuid: uuidv5(item.title as string, NAMESPACE),
      id: item.id,
      name: item.title,
      description: item.description,
      price: item.price,
      image: item.image,
      category: item.category,
      rating: (item.rating as unknown as { rate: number })?.rate,
      discount:
        Math.random() > 0.5 ? Math.floor(Math.random() * 50) + 10 : undefined,
      isNew: Math.random() > 0.7,
    }));

    return { products, page, limit };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
}

// Fetch a single product by ID
export async function getProductById(id: number): Promise<Product> {
  try {
    const response = await request.get<Product>(`/products/${id}`);

    const product = response.data;
    return {
      uuid: uuidv5(product.title as string, NAMESPACE),
      id: product.id,
      name: product.title,
      description: product.description,
      price: product.price,
      image: product.image,
      category: product.category,
      rating: (product.rating as unknown as { rate: number })?.rate,
      discount:
        Math.random() > 0.5 ? Math.floor(Math.random() * 50) + 10 : undefined,
      isNew: Math.random() > 0.7,
    };
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw new Error("Failed to fetch product");
  }
}
