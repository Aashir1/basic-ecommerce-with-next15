import AddToCartButton from "@/components/product/AddToCart";
import IncrementDecrementInCart from "@/components/product/IncrementDecrementInCart";
import { getProductById } from "@/services/productService";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  let product: Product | null = null;
  let error = null;

  try {
    product = await getProductById(parseInt(id));
  } catch (err) {
    error =
      (err as Error)?.message ||
      "Failed to load product details. Please try again later.";
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-red-500 text-center">{error}</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-gray-500 text-center">Product not found.</div>
      </div>
    );
  }

  const stars = Array(5)
    .fill(0)
    .map((_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < (product.rating || 0) ? "text-gray-600" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));

  return (
    <div className="max-w-[1120px] w-full m-auto px-[10px] py-[60px]">
      <div className="flex justify-center flex-wrap gap-[40px]">
        {/* Product Image */}
        <div className="relative max-w-[547px] w-full">
          <Image
            src={product.image}
            alt={product.description}
            width={547}
            height={728}
            className="object-contain p-4 w-full md:w-[547px] h-auto"
          />
          <div className="absolute top-[20px] left-[20px]">
            {/* New Label */}
            {product.isNew && (
              <div className="bg-white text-[16px] py-[5px] px-[15px] font-[700] rounded-[4px] text-code-gray mb-[10px]">
                NEW
              </div>
            )}

            {/* Discount Badge */}
            {product.discount && (
              <div className="bg-green-cyan text-[16px] py-[5px] px-[15px] font-[700] rounded-[4px] text-white">
                -{product.discount}% Off
              </div>
            )}
          </div>
        </div>

        {/* Product Details */}
        <div className="max-w-[508px] w-full">
          <div className="flex items-center">
            <div className="flex items-center">
              {stars}
              <span className="text-14px] text-charcoal-black font-[400] leading-[20px] ml-[5px]">
                11 Reviews
              </span>
            </div>
          </div>
          <h1 className="font-[500] text-[40px] text-charcoal-black leading-[44px]">
            {product.name}
          </h1>
          <p className="text-slate-gray text-[16px] font-[400] leading-[26px]">
            {product.description}
          </p>
          <div className="flex items-center gap-[10px] mb-[20px]">
            <div className="text-[28px] font-[500] text-code-gray">
              ${product.price.toFixed(2)}
            </div>
            <div className="text-slate-gray text-[20px] font-[500]">
              $400.00
            </div>
          </div>
          <div className="border-b border-solitude pb-[30px]">
            <div className="flex justify-between items-center mb-[20px] gap-[20px]">
              <IncrementDecrementInCart product={product} /> 
              <Link
                className="text-charcoal-black h-[52px] no-underline border border-charcoal-black rounded-[8px] w-full flex justify-center items-center text-[18px] font-[500]"
                href={"/cart"}
              >
                Cart
              </Link>
            </div>
            <AddToCartButton product={product} classes="w-full h-[52px]"/>
          </div>
          <p className="text-[12px] uppercase text-slate-gray mt-[20px]">
            Category: <span className="text-code-gray">{product.category}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
