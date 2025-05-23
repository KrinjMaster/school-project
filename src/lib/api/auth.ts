import type { AuthModel, RecordAuthResponse, RecordModel } from 'pocketbase'
import { pb } from '$lib/api/pb'
import type { User } from '$src/types/user'

class AuthService {
  async loginOAuth(provider: string): Promise<RecordAuthResponse> {
    const result = await pb.collection('users').authWithOAuth2({
      provider,
    })

    const meta = result.meta

    if (meta && meta.isNew) {
      await pb.collection('users').update(result.record.id, {
        name: meta.name,
        avatar: meta.avatarUrl,
        class: 0,
        score: 0,
        role: 'user',
      })
    }

    pb.collection('users').subscribe(result.record.id, (e) => {
      if (e.action == 'delete') {
        pb.authStore.clear()
      } else {
        pb.authStore.save(pb.authStore.token, e.record)
      }
    })

    return result as RecordAuthResponse
  }

  async updateClass(id: string, personClass: number): Promise<RecordModel> {
    const result = await pb.collection('users').update(id, {
      class: personClass,
    })

    return result as RecordModel
  }

  async updateUsersOlimpiads(
    userId: string,
    olimpiadId: string,
    score: number
  ) {
    await pb.collection('users').update(userId, {
      'completed_olimpiads+': olimpiadId,
      'score+': score,
    })
  }

  async getAllUsers(): Promise<User[]> {
    return await pb.collection('users').getFullList({
      sort: '-score',
    })
  }

  getCurrentUser(): AuthModel {
    return pb.authStore.model
  }

  logout() {
    return pb.authStore.clear()
  }
}

export const authService = new AuthService()
