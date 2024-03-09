import { pb } from '$lib/api/pb'
import type { CompletedOlimpiad, Olimpiad } from '$src/types/olimpiads'
import type { RecordModel } from 'pocketbase'

class OlimpiadService {
  async getALlOlimpiads(): Promise<Olimpiad[]> {
    return await pb.collection('olimpiads').getFullList({
      expand: 'questions',
    })
  }

  async getOlimpiad(id: string): Promise<Olimpiad> {
    return await pb.collection('olimpiads').getOne(id, {
      expand: 'questions',
    })
  }

  async completeOlimpiad(
    userAnswers: string,
    olimpiadId: string,
    rightAnswers: string,
    userId: string,
    subject: string
  ): Promise<RecordModel> {
    return await pb.collection('completed_olimpiads').create({
      olimpiad: olimpiadId,
      user_answers: userAnswers,
      right_answers: rightAnswers,
      user: userId,
      subject: subject,
    })
  }

  async getCompletedOlimpiads(): Promise<CompletedOlimpiad[]> {
    return await pb.collection('completed_olimpiads').getFullList()
  }
}

export const olimpiadService = new OlimpiadService()
