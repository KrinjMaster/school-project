<script lang="ts">
  import { setOlimpiads } from '$lib/stores/olimpiad'
  import OlimpiadSection from '$ui/sections/OlimpiadSection/OlimpiadSection.svelte'
  import { onMount } from 'svelte'

  export let data

  onMount(() => {
    setOlimpiads(data.olimpiads)
  })
</script>

<OlimpiadSection />
