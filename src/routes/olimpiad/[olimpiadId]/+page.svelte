<script lang="ts">
  import { useUser } from '$src/lib/stores/user'
  import AlreadyCompleted from '$ui/cards/OlimpiadCards/AlreadyCompleted.svelte'
  import StartOlimpiad from '$ui/cards/OlimpiadCards/StartOlimpiad.svelte'
  import { onMount } from 'svelte'
  import { setSelectedOlimpiad, useOlimpiad } from '$lib/stores/olimpiad'
  import SelectedOlimpiadSection from '$src/lib/ui/sections/OlimpiadSection/SelectedOlimpiadSection.svelte'

  export let data

  onMount(() => {
    setSelectedOlimpiad(data.selectedOlimpiad)
  })
</script>

<section class="flex flex-col h-screen w-screen p-2.5 items-center">
  {#if $useUser && $useOlimpiad}
    {#if !$useUser.completedOlimpiads.includes(data.olimpiadId)}
      {#if $useOlimpiad.isStarted === false}
        <StartOlimpiad />
      {:else}
        <SelectedOlimpiadSection />
      {/if}
    {:else}
      <AlreadyCompleted />
    {/if}
  {:else}
    <span class="loading loading-spinner w-64 my-auto"></span>
  {/if}
</section>
