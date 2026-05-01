'use client'

import Link from 'next/link'

export default function KursError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-20 text-center">
      <h2 className="text-xl font-semibold text-gray-900">Kurs konnte nicht geladen werden.</h2>
      <p className="mt-2 text-sm text-gray-500">
        Bitte versuche es erneut oder gehe zurück zur Übersicht.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={reset}
          className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 transition-colors"
        >
          Erneut versuchen
        </button>
        <Link
          href="/"
          className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Zurück zur Übersicht
        </Link>
      </div>
    </div>
  )
}
