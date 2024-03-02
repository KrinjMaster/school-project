<script lang="ts">
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'
  import { logout } from '$lib/stores/auth'
  import { useUser } from '$lib/stores/user'
  import { useOlimpiad } from '$src/lib/stores/olimpiad'

  const handleLogout = () => {
    logout()
    goto('/login')
  }
</script>

<div
  class="navbar bg-base-100 h-16 absolute top-0 bg-transparent justify-between"
>
  <a class="btn btn-ghost text-xl" href="/"
    >Олимпик
    {$useOlimpiad?.selectedOlimpiad
      ? `| ${$useOlimpiad.selectedOlimpiad.subject}`
      : ''}
  </a>
  {#key $useUser}
    {#if $useUser && $page.url.pathname != '/user'}
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
              <a class="text-lg" href={`/user`}>Профиль</a>
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
    {:else if $page.url.pathname != '/user' && $page.url.pathname != '/login'}
      <div class="flex gap-1.5">
        <div class="skeleton h-8 w-48"></div>
        <div class="skeleton w-12 h-12 rounded-full shrink-0"></div>
      </div>
    {/if}
  {/key}
</div>
