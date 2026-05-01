export default function AdminLoading() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-6 h-4 w-48 rounded bg-gray-100 animate-pulse" />
      <div className="h-8 w-56 rounded-md bg-gray-100 animate-pulse" />
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[7fr_3fr]">
        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-10 rounded-md bg-gray-100 animate-pulse" />
          ))}
        </div>
        <div className="h-48 rounded-lg bg-gray-100 animate-pulse" />
      </div>
    </div>
  )
}
