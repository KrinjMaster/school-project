import { olimpiadService } from '$lib/api/olimpiads'
import type { Olimpiad } from '$src/types/olimpiads'
import { writable, type Writable } from 'svelte/store'

export const useOlimpiads: Writable<{
  olimpiads: Olimpiad[]
  subjects: string[]
} | null> = writable({
  olimpiads: [],
  subjects: [],
})

export const fetchAllOlimpiads = async () => {
  try {
    return await olimpiadService.getALlOlimpiads()
  } catch (err) {
    console.log(err)
  }
}

export const setOlimpiads = (olimpiads: Olimpiad[]) => {
  useOlimpiads.update((_) => {
    return {
      olimpiads: olimpiads,
      subjects: [...new Set(olimpiads.map((olimpiad) => olimpiad.subject))],
    }
  })
}
