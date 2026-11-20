
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <p className="text-8xl font-black text-blue-600">404</p>

      <h1 className="mt-6 text-3xl font-bold text-gray-900">
        Product Not Found
      </h1>

      <p className="mt-3 max-w-md text-gray-500">
        Sorry, we couldn't find the product you're looking for.
        It may have been removed or the link may be incorrect.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-lg bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
      >
        Back to Homepage
      </Link>
    </main>
  );
}
