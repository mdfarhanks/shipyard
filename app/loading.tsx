export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 animate-pulse">
          <div className="h-8 w-48 rounded bg-gray-200" />
          <div className="mt-3 h-4 w-72 rounded bg-gray-200" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse overflow-hidden rounded-2xl border border-gray-200 bg-white"
            >
              <div className="aspect-square bg-gray-200" />

              <div className="space-y-3 p-5">
                <div className="h-4 w-24 rounded bg-gray-200" />
                <div className="h-6 w-40 rounded bg-gray-200" />
                <div className="h-4 w-full rounded bg-gray-200" />
                <div className="h-6 w-20 rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}