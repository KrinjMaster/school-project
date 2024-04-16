<script lang="ts">
  import { object, string } from 'yup'
  import { createForm } from 'svelte-forms-lib'
  import { updateUserClass } from '../../stores/auth'
  import { onMount } from 'svelte'
  import { useUser } from '$lib/stores/user'

  const { form, handleChange, handleSubmit } = createForm({
    initialValues: {
      class: '',
    },
    validationSchema: object().shape({
      class: string().required(),
    }),
    onSubmit: (values) => {
      updateUserClass(Number(values.class))
      const modal = document.getElementById('class_modal')

      if (modal instanceof HTMLDialogElement) {
        modal.close()
      }
    },
  })

  onMount(() => {
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key == 'Escape' && $useUser?.class != 0) {
        e.preventDefault()
      }
    })
  })
</script>

<dialog id="class_modal" class="modal">
  <div class="modal-box">
    <label for="class" class="font-bold text-2xl">Выберите ваш класс!</label>
    <select
      class="select w-full select-bordered select-md"
      id="class"
      name="class"
      on:change={handleChange}
      bind:value={$form.class}
    >
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      <option>11</option>
    </select>
    <div class="modal-action">
      <form method="dialog">
        <button
          class={`btn  mx-auto ${$form.class == '' ? 'btn-disabled' : 'btn-primary'}`}
          on:click={handleSubmit}>Сохранить</button
        >
      </form>
    </div>
  </div>
</dialog>
