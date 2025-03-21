"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export default function Header() {
  const { cart } = useCartStore();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/" },
    { label: "Product", path: "/" },
    { label: "Contact Us", path: "/" },
  ];

  return (
    <div className="max-w-[1120px] w-full m-auto flex justify-between items-center px-[10px] py-[20px] md:py-[10px]">
      <div className="flex items-center gap-[5px]">
        <Image
          className="cursor-pointer block md:hidden"
          src="/menu.svg"
          alt="logo"
          width={24}
          height={24}
        />
        <Link href="/">
          <Image
            className="cursor-pointer"
            src="/logo.svg"
            alt="logo"
            width={105}
            height={24}
          />
        </Link>
      </div>

      {/* Navigation Menu */}
      <ul className="items-center list-none gap-[40px] hidden md:flex">
        {menuItems.map((item) => {
          const isActive = item.label === "Home";

          return (
            <li key={item.label}>
              <Link
                href={item.path}
                className={`no-underline cursor-pointer text-[14px] font-[500] leading-[24px] ${
                  isActive ? "text-charcoal-black" : "text-slate-gray"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center gap-[16px]">
        <Image
          className="cursor-pointer hidden md:block"
          src="/search.svg"
          alt="logo"
          width={24}
          height={24}
        />
        <Image
          className="cursor-pointer hidden md:block"
          src="/user-circle.svg"
          alt="logo"
          width={24}
          height={24}
        />
        <Link href={'/cart'} className="flex items-center gap-[5px] text-inherit no-underline hover:no-underline" >
          <Image
            className="cursor-pointer"
            src="/cart.svg"
            alt="logo"
            width={24}
            height={24}
          />
          <div className="rounded-full bg-charcoal-black text-white text-[12px] w-[20px] h-[20px] flex items-center justify-center font-bold">
            {cart.length ?? 0}
          </div>
        </Link>
      </div>
    </div>
  );
}
