<script lang="ts">
  import GoogleButton from '$ui/loginButtons/GoogleButton.svelte'
  import YandexButton from '$ui/loginButtons/YandexButton.svelte'
</script>

<section
  class="w-screen h-screen flex flex-col justify-center items-center gap-1.5"
>
  <h1 class="text-8xl font-bold text-center">Олимпик</h1>
  <h1 class="font-bold w-96 text-center">
    Войдите в свой аккаунт или зарегестрируйтесь !
  </h1>
  <GoogleButton />
  <YandexButton />
</section>
