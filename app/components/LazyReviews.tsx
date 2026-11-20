"use client";

import dynamic from "next/dynamic";

const Reviews = dynamic(() => import("./Reviews"), {
  loading: () => (
    <div className="mt-12 rounded-2xl border bg-white p-8 shadow-sm">
      <p className="animate-pulse text-gray-500">
        Loading reviews...
      </p>
    </div>
  ),
  ssr: false,
});

export default function LazyReviews() {
  return <Reviews />;
}