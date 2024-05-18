<script lang="ts">
  import { setOlimpiads } from '$lib/stores/olimpiad'
  import OlimpiadSection from '$ui/sections/OlimpiadSection/OlimpiadSection.svelte'
  import MailIcon from '~icons/tabler/at'
  import { onMount } from 'svelte'

  export let data

  onMount(() => {
    setOlimpiads(data.olimpiads)
  })
</script>

<OlimpiadSection />
<footer class="footer items-center p-4 bg-base-100 text-black sticky bottom-0">
  <aside class="items-center grid-flow-col">
    <p class="font-bold text-xl">Олимпик</p>
  </aside>
  <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a
      class="btn btn-square btn-outline"
      tabindex="-1"
      target="_blank"
      href="mailto:maximmenchikov@gmail.com"
    >
      <MailIcon />
    </a>
  </nav>
</footer>
