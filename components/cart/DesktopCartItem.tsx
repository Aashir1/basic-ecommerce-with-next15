import { useCartStore } from "@/store/cartStore";
import Image from "next/image";

export const DesktopCartItem = () => {
  const { cart, addOrIncrement, decrementOrRemove, remove } = useCartStore();
  return (
    <div className="hidden md:block">
      {/* Table Header */}
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr] border-b pb-2 text-sm font-semibold text-gray-600">
        <p className="text-code-gray text-[16px] font-[600]">Product</p>
        <p className="text-code-gray text-[16px] font-[600]">Quantity</p>
        <p className="text-code-gray text-[16px] font-[600]">Price</p>
        <p className="text-right text-code-gray text-[16px] font-[600]">
          Subtotal
        </p>
      </div>

      {/* Cart Items */}
      {cart.map((item) => (
        <div
          key={item.uuid}
          className="grid-cols-[2fr_1fr_1fr_1fr] grid  items-center gap-[20px] py-[10px] border-b last:border-none border-solitude"
        >
          {/* Product Info */}
          <div className="flex items-center gap-[20px]">
            <Image
              src={item.image}
              alt={item.description}
              width={80}
              height={96}
              className=""
            />
            <div>
              <div className="font-[600] text-[14px] leading-[22px] mb-[10px]">
                {item.title} Title
              </div>
              <p className="mb-[10px] flex items-center gap-[5px] text-slate-gray text-[12px]">
                Color: <span>Black</span>
              </p>
              <button
                onClick={() => remove(item.uuid)}
                className="p-[0px] mt-1 flex items-center gap-[5px] bg-transparent border-none cursor-pointer"
              >
                <Image
                  className="cursor-pointer"
                  src="/cross.svg"
                  alt="cross"
                  width={24}
                  height={24}
                />
                Remove
              </button>
            </div>
          </div>

          {/* Quantity Controls */}
          <div className="p-[10px] flex items-center justify-between bg-white max-w-[127px] w-full h-[52px] rounded-[8px] border border-slate-gray">
            <button
              onClick={() => decrementOrRemove(item.uuid)}
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
            <span className="w-10 text-center">{item.quantity}</span>
            <button
              onClick={() => addOrIncrement(item)}
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

          {/* Price & Subtotal */}
          <div className="text-code-gray text-[18px] font-[400]">
            ${item.price.toFixed(2)}
          </div>
          <p className="text-right text-code-gray text-[18px] font-[600]">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  );
};
