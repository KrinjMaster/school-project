<script lang="ts">
  import { useOlimpiad } from '$src/lib/stores/olimpiad'
  import { object, string } from 'yup'
  import { createForm } from 'svelte-forms-lib'
  import { setSubject } from '$src/lib/stores/filter'

  const { form, handleChange, handleReset } = createForm({
    initialValues: {
      subject: '',
    },
    validationSchema: object().shape({
      subject: string().required(),
    }),
    onSubmit: (_) => {},
  })

  const handleResetSubject = () => {
    setSubject('')
    handleReset()
  }

  $: $form.subject, setSubject($form.subject)
</script>

<label for="subject" class="form-control w-full my-2.5">
  <div class="label">
    <span class="label-text">Выберите предмет</span>
    <button
      class="btn btn-sm btn-error label-text text-white"
      on:click={handleResetSubject}>Сбросить фильтр</button
    >
  </div>
  <select
    id="subject"
    name="subject"
    class="select select-bordered"
    on:change={handleChange}
    bind:value={$form.subject}
  >
    {#if $useOlimpiad}
      {#each $useOlimpiad.subjects as subject}
        <option>{subject}</option>
      {/each}
    {/if}
  </select>
</label>
