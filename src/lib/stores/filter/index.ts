import { writable, type Writable } from 'svelte/store'
import type { OlimpiadsFilter } from '$src/types/olimpiads'

export const useOlimpiadFilter: Writable<OlimpiadsFilter> = writable({
  subject: '',
  grade: '',
})

export const setGrade = (grade: string) => {
  useOlimpiadFilter.update((state) => {
    return {
      subject: state.subject,
      grade: grade,
    }
  })
}

export const setSubject = (subject: string) => {
  useOlimpiadFilter.update((state) => {
    return {
      subject: subject,
      grade: state.grade,
    }
  })
}
