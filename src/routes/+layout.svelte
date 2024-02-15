<script lang="ts">
  import '../app.css'
  import Header from '$lib/ui/header/Header.svelte'
  import { page } from '$app/stores'
  import { authGuard } from '$lib/guad'
  import { useUser } from '$lib/stores/user'
  import { onMount } from 'svelte'
  import { setUserOnMount } from '$lib/stores/auth'
  import ChooseClassModal from '$lib/ui/modals/ChooseClassModal.svelte'

  onMount(() => {
    setUserOnMount()

    page.subscribe(() => authGuard($useUser))

    page.subscribe(() => {
      if ($useUser?.class == 0) {
        const modal = document.getElementById('class_modal')

        if (modal instanceof HTMLDialogElement) {
          modal.showModal()
        }
      }
    })
  })
</script>

<ChooseClassModal />
<Header />
<slot />
