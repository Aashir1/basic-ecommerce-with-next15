"use client";
import { useCartStore } from "@/store/cartStore";
import { Product } from "@/types/product";

export default function AddToCartButton({
  product,
  classes = "",
}: {
  product: Product;
  classes?: string;
}) {
  const { addOrIncrement } = useCartStore();

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addOrIncrement(product);
  };

  return (
    <button
      onClick={handleButtonClick}
      className={`bg-charcoal-black border-none text-white rounded-[8px] text-[18px] font-[500] cursor-pointer ${classes}`}
    >
      Add to Cart
    </button>
  );
}
