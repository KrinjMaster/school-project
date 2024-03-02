<script lang="ts">
  import { useOlimpiad } from '$src/lib/stores/olimpiad'
  import SelectedQuestion from '$ui/sections/OlimpiadSection/SelectedQuestion.svelte'

  let questionIndex = 0

  const handleGoBack = () => questionIndex--
  const handleGoForward = () => questionIndex++
</script>

{#if $useOlimpiad && $useOlimpiad.selectedOlimpiad}
  <div class="flex items-center gap-2.5 mb-auto z-10">
    <button
      class={`btn ${questionIndex != 0 ? 'btn-primary' : 'btn-disabled'} btn-sm rounded-full`}
      on:click={handleGoBack}>Назад</button
    >
    <ul class="steps">
      {#each $useOlimpiad.selectedOlimpiad.expand.questions as question}
        <li
          class={`step ${$useOlimpiad?.selectedOlimpiad.expand.questions.indexOf(question) <= questionIndex ? 'step-primary' : ''}`}
        ></li>
      {/each}
    </ul>
    <button
      class={`btn ${questionIndex != $useOlimpiad?.selectedOlimpiad?.expand.questions.length - 1 ? 'btn-primary' : 'btn-disabled'} btn-sm rounded-full`}
      on:click={handleGoForward}>Вперёд</button
    >
  </div>
  {#key questionIndex}
    <SelectedQuestion
      olimpiadSubject={$useOlimpiad.selectedOlimpiad.subject}
      {questionIndex}
      question={$useOlimpiad.selectedOlimpiad.expand.questions[questionIndex]}
    />
  {/key}
{/if}
