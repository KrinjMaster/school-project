import { olimpiadService } from '$src/lib/api/olimpiads'
import { pb } from '$src/lib/api/pb'

export async function load() {
  const user = pb.authStore.model
  const result = await olimpiadService.getCompletedOlimpiads()

  return {
    olimpiads: result
      .filter((olimpiad) => olimpiad.user == user?.id)
      .map((olimpiad) => {
        return {
          id: olimpiad.id,
          subject: olimpiad.subject,
          rightAnswers: olimpiad.right_answers,
          userAnswers: olimpiad.user_answers,
          user: olimpiad.user,
        }
      }),
  }
}
