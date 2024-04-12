<script lang="ts">
  import { useOlimpiad } from '$lib/stores/olimpiad'
  import type { Olimpiad } from '$src/types/olimpiads'

  const isNew = (olimpiad: Olimpiad) => {
    const createdDate = new Date(olimpiad.created)
    const currentDate = new Date()

    return (
      Math.abs(createdDate.getTime() - currentDate.getTime()) /
        (1000 * 60 * 60 * 24) <
      15
    )
  }
</script>

<div
  class="flex flex-col w-[80%] h-full justify-center items-center mx-auto gap-3.5 mt-16"
>
  {#if $useOlimpiad}
    {#each $useOlimpiad.olimpiads as olimpiad}
      <div class="indicator w-full">
        {#if isNew(olimpiad)}
          <span
            class="indicator-item indicator-start badge badge-primary font-bold"
            >новая</span
          >
        {/if}
        <div
          class="card card-bordered w-full bg-base-100 shadow-xl hover:bg-base-200 transition-colors duration-150 ease-out"
        >
          <div class="card-body flex flex-row gap-5 items-center">
            <h2 class="card-title text-3xl uppercase font-bold">
              {olimpiad.subject}
            </h2>
            <div
              class="flex text-lg gap-1.5 badge badge-secondary font-bold h-8"
            >
              <p>
                {`${olimpiad.grades.split(',')[0]}-${olimpiad.grades.split(',').slice(-1)}`}
              </p>
              классы
            </div>
            <a
              href={`/olimpiad/${olimpiad.id}`}
              class="btn btn-outline btn-primary btn-wide ml-auto"
              >Участвовать!</a
            >
          </div>
        </div>
      </div>
    {/each}
  {:else}
    <div class="skeleton w-full h-28 rounded-md shrink-0"></div>
    <div class="skeleton w-full h-28 rounded-md shrink-0"></div>
    <div class="skeleton w-full h-28 rounded-md shrink-0"></div>
    <div class="skeleton w-full h-28 rounded-md shrink-0"></div>
  {/if}
</div>
