"use client";

export default function Reviews() {
  return (
    <section className="mt-12 rounded-2xl border bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900">
        Customer Reviews
      </h2>

      <p className="mt-3 text-gray-500">
        Customers love our thoughtfully selected products.
      </p>

      <div className="mt-6 space-y-5">
        <div className="rounded-xl bg-gray-50 p-5">
          <p className="font-semibold text-gray-900">
            Great quality!
          </p>
          <p className="mt-2 text-sm text-gray-600">
            The product feels well-made and looks exactly as expected.
          </p>
          <p className="mt-3 text-sm text-gray-500">
            ★★★★★ — Alex
          </p>
        </div>

        <div className="rounded-xl bg-gray-50 p-5">
          <p className="font-semibold text-gray-900">
            Very happy with my purchase
          </p>
          <p className="mt-2 text-sm text-gray-600">
            A great addition to my everyday essentials.
          </p>
          <p className="mt-3 text-sm text-gray-500">
            ★★★★★ — Sam
          </p>
        </div>
      </div>
    </section>
  );
}