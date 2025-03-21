import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header/Index";
import Footer from "@/components/Layout/Footer";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Products | My Store",
  description: "Browse our amazing products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} font-[family-name:var(--font-inter)] antialiased`}
      >
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
