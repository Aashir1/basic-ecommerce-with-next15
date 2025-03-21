"use client";
import { useCartStore } from "@/store/cartStore";
import { Product } from "@/types/product";
import Image from "next/image";

export default function IncrementDecrementInCart({ product }: { product: Product }) {
  const { addOrIncrement, cart, decrementOrRemove } = useCartStore();

  const filteredProduct = cart.find((item) => item.uuid === product.uuid);

  return (
    <div className="p-[10px] flex items-center justify-between bg-white-smoke max-w-[127px] w-full h-[52px] rounded-[8px]">
      <button
        onClick={() => decrementOrRemove(product.uuid)}
        className="border-none bg-transparent"
      >
        <Image
          className="cursor-pointer"
          src="/minus.svg"
          alt="minus"
          width={20}
          height={20}
        />
      </button>
      <div className="text-[16px] font-[600] leading-[26px] text-code-gray">{filteredProduct?.quantity ?? 1}</div>
      <button
        onClick={() => addOrIncrement(product)}
        className="border-none bg-transparent"
      >
       <Image
          className="cursor-pointer"
          src="/add.svg"
          alt="plus"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
}
