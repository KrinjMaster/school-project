<script lang="ts">
  import { goto } from '$app/navigation'
  import { useUser } from '$src/lib/stores/user'
  import { logout } from '$lib/stores/auth'
  import { onMount } from 'svelte'
  import { setCompletedOlimpiads, useOlimpiad } from '$src/lib/stores/olimpiad'
  import CompletedOlimpiad from '$ui/cards/OlimpiadCards/CompletedOlimpiad.svelte'

  export let data

  const handleLogout = () => {
    logout()
    goto('/login')
  }

  onMount(() => {
    setCompletedOlimpiads(data.olimpiads)
  })
</script>

<section class="w-screen h-screen flex flex-col pt-16 px-2.5 gap-5">
  <div class="flex gap-2.5 items-center">
    {#if $useUser}
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
    {:else}
      <div class="skeleton w-24 h-24 rounded-full shrink-0"></div>
      <div class="skeleton h-16 w-96"></div>
      <div class="btn btn-disabled btn-wide btn-lg">Выйти</div>
    {/if}
  </div>
  {#if $useOlimpiad}
    {#each $useOlimpiad.completedOlimpiads as olimpiad}
      <CompletedOlimpiad {olimpiad} />
    {/each}
  {/if}
</section>
