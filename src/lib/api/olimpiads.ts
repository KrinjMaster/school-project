import { pb } from '$lib/api/pb'
import type { Olimpiad } from '$src/types/olimpiads'

class OlimpiadService {
  async getALlOlimpiads(): Promise<Olimpiad[]> {
    return await pb.collection('olimpiads').getFullList({
      expand: 'questions',
    })
  }
}

export const olimpiadService = new OlimpiadService()
