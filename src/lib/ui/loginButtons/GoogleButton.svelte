<script lang="ts">
  import GoogleLogo from '~icons/tabler/brand-google-filled'
  import handleOAuth from '$lib/utils'
</script>

<button
  class="btn btn-outline btn-lg btn-primary w-96"
  on:click={() => handleOAuth('google')}
>
  <GoogleLogo style="font-size:2rem;" />
  Войти с помощью Google
</button>
