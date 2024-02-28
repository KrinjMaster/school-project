import { fetchAllOlimpiads } from '$lib/stores/olimpiad'
import type { Olimpiad } from '$src/types/olimpiads'

export async function load() {
  const result: Olimpiad[] | undefined = await fetchAllOlimpiads()

  return {
    olimpiads: result ? result : [],
  }
}
