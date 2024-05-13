<script lang="ts">
  import type { CompletedOlimpiad } from '$src/types/olimpiads'

  export let olimpiad: CompletedOlimpiad

  const rightAnswersQuantity = () => {
    const userAnswers = olimpiad.userAnswers
      .split('/')
      .filter((answer) => answer !== '')

    return olimpiad.rightAnswers
      .split('/')
      .filter((answer, i) => userAnswers[i] == answer).length
  }

  const getAnswerColor = (percent: number) => {
    if (percent > 80) {
      return 'text-green-500'
    } else if (percent > 45) {
      return 'text-yellow-500'
    } else {
      return 'text-red-500'
    }
  }
</script>

<div
  class="card card-bordered w-full bg-base-100 shadow-xl hover:bg-base-200 transition-colors duration-150 ease-out"
>
  <div class="card-body flex flex-row gap-12 items-center">
    <div>
      <h2 class="card-title text-3xl uppercase font-bold">
        {olimpiad.subject}
      </h2>
      <p
        class={`text-lg ${getAnswerColor(
          (rightAnswersQuantity() * 100) /
            olimpiad.rightAnswers.split('/').length
        )}`}
      >
        выполнено правильно на {(rightAnswersQuantity() * 100) /
          olimpiad.rightAnswers.split('/').length}%
      </p>
    </div>
  </div>
</div>
