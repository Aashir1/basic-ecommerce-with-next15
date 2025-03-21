import Image from "next/image";
import { Product } from "@/types/product";
import Link from "next/link";
import AddToCartButton from "./AddToCart";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="text-inherit no-underline hover:no-underline"
    >
      <div className="relative group">
        <Image
          src={product.image}
          alt={product.description}
          width={262}
          height={369}
        />
        <div className="absolute top-[20px] left-[20px]">
          <div className="bg-white text-[16px] py-[5px] px-[15px] font-[700] rounded-[4px] text-code-gray mb-[10px]">
            New
          </div>
          <div className="bg-green-cyan text-[16px] py-[5px] px-[15px] font-[700] rounded-[4px] text-white">
            -50%
          </div>
        </div>
        <AddToCartButton
          product={product}
          classes="md:hidden md:group-hover:block w-[215px] h-[46px] text-white absolute bottom-[5px] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="my-[12px] flex flex-col gap-[12px]">
        <div className="flex items-center gap-0.5 text-gray-900">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="w-[16px] h-[16px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"></path>
            </svg>
          ))}
        </div>
        {product.name && (
          <div className="truncate text-charcoal-black text-[16px] font-[600] leading-[26px]">
            {product.name}
          </div>
        )}
        {product.price && (
          <div className="flex items-center gap-[10px]">
            <div className="text-sm text-code-gray text-[14px] font-[600] leading-[22px]">
              ${product.price}
            </div>
            <div className="text-slate-gray text-[14px] font-[400]">
              $400.00
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
