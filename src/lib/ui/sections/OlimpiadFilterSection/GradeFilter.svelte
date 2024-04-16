<script lang="ts">
  import { setGrade } from '$src/lib/stores/filter'
  import { createForm } from 'svelte-forms-lib'
  import { object, string } from 'yup'

  const { form, handleChange, handleReset } = createForm({
    initialValues: {
      grade: '',
    },
    validationSchema: object().shape({
      grade: string().required(),
    }),
    onSubmit: (_) => {},
  })

  const handleResetGrade = () => {
    setGrade('')
    handleReset()
  }

  $: $form.grade, setGrade($form.grade)
</script>

<label for="grade" class="form-control w-full my-2.5">
  <div class="label">
    <span class="label-text">Выберите класс</span>
    <button
      class="btn btn-sm btn-error label-text text-white"
      on:click={handleResetGrade}>Сбросить фильтр</button
    >
  </div>
  <select
    id="grade"
    name="grade"
    class="select select-bordered"
    on:change={handleChange}
    bind:value={$form.grade}
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
</label>
