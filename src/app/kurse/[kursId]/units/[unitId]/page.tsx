import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getUnitWithTasks } from '@/lib/dal'
import UnitDetailClient from '@/components/UnitDetailClient'

interface Props {
  params: Promise<{ kursId: string; unitId: string }>
}

export default async function UnitPage({ params }: Props) {
  const { kursId, unitId } = await params
  const unit = await getUnitWithTasks(unitId)
  if (!unit) notFound()

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Link href={`/kurse/${kursId}`} className="mb-6 inline-block text-sm text-gray-500 hover:text-gray-700">
        ← Back to course
      </Link>
      <h1 className="text-2xl font-bold text-gray-900">{unit.title}</h1>
      {unit.description && (
        <p className="mt-2 text-gray-600">{unit.description}</p>
      )}
      <UnitDetailClient tasks={unit.tasks} />
    </div>
  )
}
