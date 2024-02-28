<script lang="ts">
  import { setOlimpiads, useOlimpiads } from '$lib/stores/olimpiad/index.js'
  import OlimpiadSection from '$ui/sections/OlimpiadSection/OlimpiadSection.svelte'
  import { onMount } from 'svelte'

  export let data

  onMount(() => {
    setOlimpiads(data.olimpiads)
  })
</script>

<OlimpiadSection />
