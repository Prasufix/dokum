export default function UnitLoading() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <div className="mb-6 h-4 w-28 rounded bg-gray-100 animate-pulse" />
      <div className="h-8 w-72 rounded-md bg-gray-100 animate-pulse" />
      <div className="mt-8 space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-12 rounded-md bg-gray-100 animate-pulse" />
        ))}
      </div>
    </div>
  )
}
