import { CartState } from "@/types/product";
import { create } from "zustand";

export const useCartStore = create<CartState>()((set) => ({
  cart: [],

  addOrIncrement: (product) =>
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.uuid === product.uuid
      );
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.uuid === product.uuid
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),

  decrementOrRemove: (uuid) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.uuid === uuid ? { ...item, quantity: item?.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0),
    })),

  remove: (uuid) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.uuid !== uuid),
    })),

  clearCart: () => set({ cart: [] }),
}));
