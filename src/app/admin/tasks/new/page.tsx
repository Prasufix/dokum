import Link from 'next/link'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { getTaskById, getAllKurseDeep } from '@/lib/dal'
import { NewTaskPageClient } from '@/components/admin/NewTaskPageClient'
import { AdminSubpageNav } from '@/components/admin/AdminSubpageNav'

export default async function NewTaskPage({
  searchParams,
}: {
  searchParams: Promise<{ unitId?: string; editId?: string }>
}) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user || user.app_metadata?.['role'] !== 'admin') {
    redirect('/')
  }

  const { unitId, editId } = await searchParams

  let defaultUnitId = unitId ?? ''
  let editDefaults: { title: string; description: string | null; position: number } | undefined
  if (editId) {
    const data = await getTaskById(editId)
    if (data) {
      editDefaults = { title: data.title, description: data.description, position: data.position }
      defaultUnitId = data.unit_id
    }
  }

  const kurse = await getAllKurseDeep()

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <AdminSubpageNav active="tasks" />
      <div className="mb-8 flex items-baseline gap-4">
        <h1 className="text-2xl font-bold text-gray-900">
          {editId ? 'Task bearbeiten' : 'Task anlegen'}
        </h1>
        {editId && (
          <Link href="/admin/tasks/new" className="text-sm text-brand hover:underline">
            + Neuen Task anlegen
          </Link>
        )}
      </div>
      <NewTaskPageClient
        key={editId ?? 'new'}
        kurseWithUnitsAndTasks={kurse}
        defaultUnitId={defaultUnitId}
        editId={editId}
        defaultValues={editDefaults}
      />
    </main>
  )
}
