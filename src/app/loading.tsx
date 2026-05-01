export default function GlobalLoading() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-6 h-8 w-32 rounded-md bg-gray-100 animate-pulse" />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-32 rounded-lg bg-gray-100 animate-pulse" />
        ))}
      </div>
    </div>
  )
}
