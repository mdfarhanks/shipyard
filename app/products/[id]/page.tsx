
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "../../data/products";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="mb-8 inline-block text-sm font-semibold text-blue-600 hover:underline"
        >
          ← Back to products
        </Link>

        <div className="grid gap-10 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
          <div className="overflow-hidden rounded-xl bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              {product.category}
            </p>

            <h1 className="mt-3 text-4xl font-black text-gray-900">
              {product.name}
            </h1>

            <p className="mt-5 leading-7 text-gray-600">
              {product.description}
            </p>

            <p className="mt-5 text-3xl font-bold text-gray-900">
              ${product.price}
            </p>

            <p className="mt-3 text-gray-600">
              ★ {product.rating} / 5
            </p>

            {product.featured && (
              <span className="mt-4 w-fit rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                Featured Product
              </span>
            )}

            <Link
              href="/"
              className="mt-8 w-fit rounded-lg bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
            >
              Continue exploring
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
