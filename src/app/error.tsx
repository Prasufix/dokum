'use client'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-20 text-center">
      <h2 className="text-xl font-semibold text-gray-900">Etwas ist schiefgelaufen.</h2>
      <p className="mt-2 text-sm text-gray-500">
        Die Seite konnte nicht geladen werden. Bitte versuche es erneut.
      </p>
      <button
        onClick={reset}
        className="mt-6 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 transition-colors"
      >
        Erneut versuchen
      </button>
    </div>
  )
}
