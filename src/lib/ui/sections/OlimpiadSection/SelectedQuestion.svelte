<script lang="ts">
  import {
    handleCompleteOlimpiad,
    updateAnswers,
    useOlimpiad,
  } from '$src/lib/stores/olimpiad'
  import { useUser } from '$src/lib/stores/user'
  import type { Question } from '$src/types/olimpiads'
  import { createForm } from 'svelte-forms-lib'
  import { object, string } from 'yup'

  export let question: Question
  export let questionIndex: number
  export let olimpiadSubject: string

  const { form, handleChange, handleSubmit } = createForm({
    initialValues: {
      answer: '',
    },
    validationSchema: object().shape({
      answer: string().required(),
    }),
    onSubmit: (values) => {
      updateAnswers(values.answer, questionIndex)
    },
  })

  const handleEndOlimpiad = () => {
    if ($useOlimpiad && $useOlimpiad.selectedOlimpiad && $useUser) {
      handleCompleteOlimpiad(
        $useOlimpiad.selectedOlimpiadAnswers.toLowerCase(),
        $useOlimpiad?.selectedOlimpiad.expand.questions
          .map((question) => question.answer)
          .join(','),
        $useOlimpiad?.selectedOlimpiad.id,
        $useUser.id,
        olimpiadSubject
      )
    }
  }
</script>

<div class="flex flex-col h-full w-full items-start p-5">
  <h1 class="text-3xl font-bold">
    {question.question}
  </h1>
  <p class="text-xl font-bold mt-auto">
    {#if $useOlimpiad && $useOlimpiad.selectedOlimpiadAnswers.split(',')[questionIndex] != ''}
      Вы выбрали ответ <span class="text-primary">
        {$useOlimpiad.selectedOlimpiadAnswers.split(',')[questionIndex]}
      </span>
    {/if}
  </p>
  <div class="flex flex-col w-full h-[50%] gap-16 mt-4">
    <textarea
      placeholder="Напишите ответ здесь!"
      on:change={handleChange}
      bind:value={$form.answer}
      class="input input-bordered text-2xl p-5 resize-none rounded-md w-full h-full"
    ></textarea>
    <div class="flex justify-between">
      <button
        on:click={handleEndOlimpiad}
        class="btn btn-error text-white btn-wide btn-lg"
        >Закончить олимпиаду!</button
      >
      <button
        on:click={handleSubmit}
        class={`btn ${$form.answer !== '' ? 'btn-primary' : 'btn-disabled'} btn-wide btn-lg `}
        >Сохранить ответ!</button
      >
    </div>
  </div>
</div>
