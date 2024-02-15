import type { AuthModel, RecordAuthResponse, RecordModel } from 'pocketbase'
import { pb } from '$lib/api/pb'

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
      })
    }

    return result as RecordAuthResponse
  }

  async updateClass(id: string, personClass: number): Promise<RecordModel> {
    const result = await pb.collection('users').update(id, {
      class: personClass,
    })

    return result as RecordModel
  }

  getCurrentUser(): AuthModel {
    return pb.authStore.model
  }

  logout() {
    return pb.authStore.clear()
  }
}

export const authService = new AuthService()
