<script lang="ts">
  import { goto } from '$app/navigation'
  import { useUser } from '$src/lib/stores/user'
  import { logout } from '$lib/stores/auth'

  const handleLogout = () => {
    logout()
    goto('/login')
  }
</script>

<section class="w-screen h-screen flex flex-col pt-16 px-2.5">
  <div class="flex gap-2.5 items-center">
    <img src={$useUser?.avatar} alt="user avatar" class="w-24 rounded-full" />
    <h1 class="text-4xl font-bold">
      {$useUser?.name}
    </h1>
    <button
      class="btn btn-error btn-wide text-white text-lg"
      on:click={handleLogout}
    >
      Выйти
    </button>
  </div>
</section>
