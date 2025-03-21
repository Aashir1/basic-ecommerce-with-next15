export interface Product {
  uuid: string;
  id: number;
  name?: string;
  title?: string;
  description: string;
  price: number;
  image: string;
  category: string;
  discount?: number;
  isNew?: boolean;
  rating?: number;
}
export interface PaginatedResponse {
  products: Product[];
  page: number;
  limit: number;
}
export interface Cart extends Product {
  quantity: number;
}
export interface CartState {
  cart: Cart[];
  addOrIncrement: (product: Product) => void;
  decrementOrRemove: (uuid: string) => void;
  remove: (uuid: string) => void;
  clearCart: () => void;
}