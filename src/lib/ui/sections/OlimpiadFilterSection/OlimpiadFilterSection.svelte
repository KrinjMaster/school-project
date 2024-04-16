<script lang="ts">
  import FilterIcon from '~icons/tabler/adjustments-horizontal'
  import GradeFilter from './GradeFilter.svelte'
  import SubjectFilter from './SubjectFilter.svelte'
</script>

<div class="w-full h-16 flex items-center justify-end">
  <button
    class="btn btn-square h-14 w-14 btn-primary btn-outline p-1.5 flex flex-col border-none"
    onclick="filter_modal.showModal()"
  >
    <FilterIcon style="font-size:2rem;" />
  </button>
</div>
<dialog id="filter_modal" class="modal">
  <div class="modal-box">
    <form method="dialog">
      <button
        class="btn btn-primary btn-outline btn-square btn-md ml-auto absolute right-2 top-2 text-4xl border-none"
        >✕</button
      >
    </form>
    <h3 class="font-bold text-lg w-96 mb-6">
      Выберите параметры, по которым отфильтруются олимпиады!
    </h3>
    <SubjectFilter />
    <GradeFilter />
  </div>
</dialog>
