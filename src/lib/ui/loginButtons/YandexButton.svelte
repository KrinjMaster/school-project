<script lang="ts">
  import YandexLogo from '~icons/tabler/brand-yandex'
  import handleOAuth from '$lib/utils'
</script>

<button
  class="btn btn-outline btn-lg btn-primary w-96"
  on:click={() => handleOAuth('yandex')}
>
  <YandexLogo style="font-size:2rem;" />
  Войти с помощью Яндекса
</button>
