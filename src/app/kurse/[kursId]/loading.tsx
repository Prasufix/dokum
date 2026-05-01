export default function KursLoading() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-6 h-4 w-24 rounded bg-gray-100 animate-pulse" />
      <div className="h-8 w-64 rounded-md bg-gray-100 animate-pulse" />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-28 rounded-lg bg-gray-100 animate-pulse" />
        ))}
      </div>
    </div>
  )
}
