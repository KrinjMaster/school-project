import { authService } from '$src/lib/api/auth'

export async function load() {
  const users = await authService.getAllUsers()

  return {
    users: users.map((user, index) => ({
      name: user.name,
      avatar: user.avatar,
      score: user.score,
      place: index + 1,
    })),
  }
}
