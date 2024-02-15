import { goto } from '$app/navigation'
import type { User } from '$src/types/user'

export const authGuard = (user: User | null) => {
  if (user === null) {
    goto('/login')
  }
}
