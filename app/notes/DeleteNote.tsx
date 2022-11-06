'use client'

import { useRouter } from 'next/navigation'

import PocketBase from 'pocketbase'

export default function DeleteNote({ id }: any) {
  const router = useRouter()
  return (
    <div>
      <button
        onClick={async () => {
          const client = new PocketBase('http://127.0.0.1:8090')
          await client.records.delete('notes', id)
          router.push('/notes')
        }}
      >
        Delete Note
      </button>
    </div>
  )
}
