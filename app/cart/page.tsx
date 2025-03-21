"use client";
import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";
import { MobileCartItem } from "@/components/cart/MobileCartItem";
import { DesktopCartItem } from "@/components/cart/DesktopCartItem";

export default function CartPage() {
  const { cart, clearCart } =
    useCartStore();
  const router = useRouter();

  const checkoutHandler = () => {
    clearCart();
    router.replace("/");
  };

  return (
    <div className="max-w-[1120px] w-full mx-auto px-[10px] pt-[30px] pb-[60px]">
      <h1 className="text-[54px] font-[500] text-center">Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {/* Web View */}
          <DesktopCartItem />

          {/* Mobile View */}
          <MobileCartItem />

          {/* Checkout Section */}
          <div className="mt-6 flex justify-end border-t pt-4">
            <div className="text-right">
              <p className="text-[20px] font-[600] text-charcoal-black">
                Total: $
                {cart
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
              <button
                onClick={checkoutHandler}
                className="border-none mt-[20px] bg-charcoal-black w-full text-white rounded-[8px] h-[52px] text-[18px] font-[500] cursor-pointer px-[50px]"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
