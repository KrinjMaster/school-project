<script lang="ts">
  export let data
</script>

<section class="w-screen h-full flex flex-col items-center mt-16 gap-5">
  {#if data.users}
    {#each data.users as user}
      <div
        class="flex gap-5 items-center rounded-lg w-[80%] h-28 p-5 bg-base-100 shadow-xl hover:bg-base-200 transition-colors duration-150 ease-out"
      >
        <p class="font-bold text-xl text-primary">{user.place} место</p>
        <img src={user.avatar} alt="user avatar" class="rounded-full w-16" />
        <p class="font-bold text-3xl">{user.name}</p>
        <p class="font-bold text-3xl text-primary ml-auto">{user.score}</p>
      </div>
    {/each}
  {:else}
    <div class="skeleton w-full h-28 rounded-md shrink-0"></div>
    <div class="skeleton w-full h-28 rounded-md shrink-0"></div>
    <div class="skeleton w-full h-28 rounded-md shrink-0"></div>
    <div class="skeleton w-full h-28 rounded-md shrink-0"></div>
  {/if}
</section>
