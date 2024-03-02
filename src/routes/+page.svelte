<script lang="ts">
  import { setOlimpiads, useOlimpiad } from '$lib/stores/olimpiad'
  import OlimpiadSection from '$ui/sections/OlimpiadSection/OlimpiadSection.svelte'
  import { onMount } from 'svelte'

  export let data

  onMount(() => {
    setOlimpiads(data.olimpiads)
  })

  $: console.log($useOlimpiad)
</script>

<OlimpiadSection />
