import Image from "next/image";
import Link from "next/link";
import type { Product } from "../data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          priority={product.id === "wave-runner"}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            {product.category}
          </span>

          {product.featured && (
            <span className="rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
              Featured
            </span>
          )}
        </div>

        <h2 className="text-lg font-bold text-gray-900">
          {product.name}
        </h2>

        <p className="mt-2 line-clamp-2 text-sm text-gray-600">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${product.price}
          </span>

          <span className="text-sm text-gray-500">
            ⭐ {product.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}