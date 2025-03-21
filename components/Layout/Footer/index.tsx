import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/" },
    { label: "Product", path: "/" },
    { label: "Contact Us", path: "/" },
  ];

  return (
    <div className="bg-charcoal-black">
      <div className="max-w-[1120px] w-full m-auto px-[10px] pt-[70px] pb-[30px]">
        {/* First Row */}
        <div className="flex items-center justify-between mb-[40px] flex-col md:flex-row">
          <div className="flex items-center gap-[20px] flex-col md:flex-row">
            <Link href="/">
              <Image
                className="cursor-pointer"
                src="/footer-logo.svg"
                alt="logo"
                width={105}
                height={24}
              />
            </Link>
            <Image
              className="cursor-pointe hidden md:block"
              src="/rectangle.svg"
              alt="me"
              width={1}
              height={24}
            />
            <Image
              className="cursor-pointer block md:hidden"
              src="/rectangle-hr.svg"
              alt="me"
              width={24}
              height={1}
            />
            <div className="text-solitude text-[14px] font-[400]">
              Gift & Decoration Store
            </div>
          </div>

          {/* Navigation Menu */}
          <ul className="items-center p-[0px] list-none gap-[40px] flex flex-col md:flex-row">
            {menuItems.map((item) => {
              return (
                <li className="w-full md:w-auto text-center" key={item.label}>
                  <Link
                    href={item.path}
                    className="text-white no-underline cursor-pointer text-[14px] font-medium leading-[24px]"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Second Row */}
        <div
          className="flex justify-between items-center border-t-1 border-slate-gray 
          py-[16px] flex-col-reverse md:flex-row gap-[28px]"
        >
          <div className="flex items-center gap-[28px] flex-col-reverse md:flex-row">
            <div className="text-solitude text-[14px] font-[400] text-center">
              Copyright © 2023 3legant. All rights reserved
            </div>
            <div className="flex items-center gap-[28px]">
              <Link
                className="text-white no-underline cursor-pointer text-[12px] font-[600] leading-[20px]"
                href="/"
              >
                Privacy Policy
              </Link>
              <Link
                className="text-white no-underline cursor-pointer text-[12px] font-[600] leading-[20px]"
                href="/"
              >
                Terms of Use
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-[24px]">
            <Link href="/">
              <Image
                className="cursor-pointer"
                src="/instagram.svg"
                alt="insta"
                width={24}
                height={24}
              />
            </Link>
            <Link href="/">
              <Image
                className="cursor-pointer"
                src="/facebook.svg"
                alt="facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link href="/">
              <Image
                className="cursor-pointer"
                src="/youtube.svg"
                alt="youtube"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
