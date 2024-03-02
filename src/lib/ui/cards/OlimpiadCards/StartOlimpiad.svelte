<script lang="ts">
  import { startOlimpiad } from '$lib/stores/olimpiad'

  const handleStartOlimpiad = () => {
    startOlimpiad()
  }
</script>

<div class="card w-96 h-fit bg-base-100 shadow-xl my-auto">
  <figure class="px-10 pt-10">
    <img
      src="https://cdn.frankerfacez.com/emoticon/464328/4"
      alt="Shoes"
      class="rounded-xl"
    />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Внимание!</h2>
    <p>
      Имейте ввиду, что при перезагрузке страницы весь прогресс будет утерян!
    </p>
    <div class="card-actions">
      <btn class="btn btn-primary" on:click={handleStartOlimpiad}
        >Начать олимпиаду!</btn
      >
    </div>
  </div>
</div>
