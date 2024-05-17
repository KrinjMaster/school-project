import { writable, type Writable } from 'svelte/store'
import { authService } from '$lib/api/auth'
import { useUser } from '$lib/stores/user'
import type { Auth } from '$src/types/auth'

export const useAuth: Writable<Auth | null> = writable({
  isLoggedIn: false,
})

export function setIsLoggedIn(value: boolean) {
  useAuth.set({ isLoggedIn: value })
}

export function oauthLogin(provider: string) {
  return authService.loginOAuth(provider)
}

export function setUserOnMount() {
  const user = authService.getCurrentUser()

  if (user) {
    useAuth.set({ isLoggedIn: true })
    useUser.set({
      id: user.id,
      username: user.username,
      email: user.email,
      name: user.name,
      avatar: user.avatar,
      class: user.class,
      completedOlimpiads: user.completed_olimpiads,
      score: user.score,
      role: user.role,
    })
  }
}

export function updateUserClass(userClass: number) {
  const user = authService.getCurrentUser()

  useUser.update((state) => {
    if (state) {
      return {
        id: state.id,
        username: state.username,
        email: state.email,
        name: state.name,
        avatar: state.avatar,
        class: userClass,
        completedOlimpiads: state.completedOlimpiads,
        score: state.score,
        role: state.role,
      }
    } else {
      return null
    }
  })

  if (user) {
    authService.updateClass(user.id, userClass)
  }
}

export function updateCompletedOlimpiads(id: string) {
  useUser.update((state) => {
    if (state) {
      return {
        id: state.id,
        username: state.username,
        email: state.email,
        name: state.name,
        avatar: state.avatar,
        class: state.class,
        completedOlimpiads: [...state.completedOlimpiads, id],
        score: state.score,
        role: state.role,
      }
    } else {
      return null
    }
  })
}

export function logout() {
  authService.logout()
  useAuth.set({ isLoggedIn: false })
  useUser.set(null)
}
