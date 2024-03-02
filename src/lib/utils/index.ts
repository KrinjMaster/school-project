import { goto } from '$app/navigation'
import { oauthLogin, setIsLoggedIn } from '$lib/stores/auth'
import { setUser } from '$lib/stores/user'

export default async function handleOAuth(provider: string) {
  try {
    const user = await oauthLogin(provider)

    setIsLoggedIn(true)

    setUser({
      id: user.record.id,
      username: user.record.username,
      email: user.record.email,
      name: user.meta?.name,
      avatar: user.meta?.avatarUrl,
      class: user.record.class,
      completedOlimpiads: user.record.completed_olimpiads
        ? user.record.completed_olimpiads
        : [],
    })

    goto('/')
  } catch (err) {
    console.log(err)
  }
}
