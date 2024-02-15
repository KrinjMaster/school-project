<script lang="ts">
  import { goto } from '$app/navigation'
  import { logout } from '$lib/stores/auth'
  import { useUser } from '$lib/stores/user'

  const handleLogout = () => {
    logout()
    goto('/login')
  }
</script>

<div
  class="navbar bg-base-100 h-16 absolute top-0 bg-transparent justify-between"
>
  <a class="btn btn-ghost text-xl" href="/">Олимпик</a>
  {#key $useUser}
    {#if $useUser}
      <div class="flex gap-1.5">
        <p class="font-bold text-xl">{$useUser.name}</p>
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button">
            <img
              src={$useUser.avatar}
              alt="user avatar"
              class="rounded-full w-12"
            />
          </div>
          <ul
            tabindex="0"
            class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 font-semibold gap-1.5"
          >
            <li>
              <a class="text-lg" href="/">Профиль</a>
            </li>
            <button
              class="btn btn-error text-white text-lg h-12 mt-auto"
              on:click={handleLogout}
            >
              Выйти
            </button>
          </ul>
        </div>
      </div>
    {/if}
  {/key}
</div>
