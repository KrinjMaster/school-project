<script lang="ts">
  import GoogleButton from '$lib/ui/loginButtons/GoogleButton.svelte'
  import YandexButton from '$lib/ui/loginButtons/YandexButton.svelte'
</script>

<section
  class="w-screen h-screen flex flex-col justify-center items-center gap-2.5"
>
  <h1 class="text-2xl font-bold w-96 text-center mb-12">
    Войдите в свой аккаунт<br /> или <br />зарегестрируйтесь !
  </h1>
  <GoogleButton />
  <YandexButton />
</section>
