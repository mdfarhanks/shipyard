import Link from "next/link";
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";

export const metadata = {
  title: "ShipYard | Discover Products Worth Keeping",
  description:
    "Explore ShipYard's curated collection of thoughtfully selected products for everyday life.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between border-b bg-white px-6 py-5 md:px-12">
        <Link href="/" className="text-2xl font-black tracking-tight">
          Ship<span className="text-blue-600">Yard.</span>
        </Link>

        <span className="text-sm font-medium text-gray-500">
          Curated Products
        </span>
      </nav>

      <section className="px-6 py-16 text-center md:py-24">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
          Discover Something New
        </p>

        <h1 className="text-4xl font-black tracking-tight text-gray-900 md:text-6xl">
          Products worth
          <br />
          <span className="text-blue-600">keeping.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-gray-500">
          Explore our collection of thoughtfully selected products
          designed to make everyday life better.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-12">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            Our Collection
          </h2>

          <span className="text-sm text-gray-500">
            {products.length} Products
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <footer className="border-t bg-white px-6 py-8 text-center text-sm text-gray-500">
        © 2026 ShipYard. All rights reserved.
      </footer>
    </main>
  );
}