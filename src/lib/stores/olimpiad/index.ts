import { goto } from '$app/navigation'
import { olimpiadService } from '$lib/api/olimpiads'
import { authService } from '$src/lib/api/auth'
import type { CompletedOlimpiad, Olimpiad } from '$src/types/olimpiads'
import { writable, type Writable } from 'svelte/store'
import { updateCompletedOlimpiads } from '../auth'

export const useOlimpiad: Writable<{
  olimpiads: Olimpiad[]
  subjects: string[]
  selectedOlimpiad: Olimpiad | null
  selectedOlimpiadAnswers: string
  isStarted: boolean
  completedOlimpiads: CompletedOlimpiad[]
} | null> = writable(null)

export const fetchAllOlimpiads = async () => {
  try {
    return await olimpiadService.getALlOlimpiads()
  } catch (err) {
    console.log(err)
  }
}

export const setOlimpiads = (olimpiads: Olimpiad[]) => {
  useOlimpiad.update((_) => {
    return {
      olimpiads: olimpiads,
      subjects: [...new Set(olimpiads.map((olimpiad) => olimpiad.subject))],
      selectedOlimpiad: null,
      selectedOlimpiadAnswers: '',
      isStarted: false,
      completedOlimpiads: [],
    }
  })
}

export const setSelectedOlimpiad = (olimpiad: Olimpiad) => {
  useOlimpiad.update((state) => {
    return {
      olimpiads: state ? state.olimpiads : [],
      subjects: state ? state.subjects : [],
      selectedOlimpiad: olimpiad,
      selectedOlimpiadAnswers: '',
      isStarted: false,
      completedOlimpiads: [],
    }
  })
}

export const handleCompleteOlimpiad = (
  userAnswers: string,
  rightAnswers: string,
  olimpiadId: string,
  userId: string,
  olimpiadSubject: string
) => {
  try {
    olimpiadService.completeOlimpiad(
      userAnswers,
      olimpiadId,
      rightAnswers,
      userId,
      olimpiadSubject
    )
    authService.updateUsersOlimpiads(userId, olimpiadId)
    updateCompletedOlimpiads(olimpiadId)
    goto('/')
    endOlimpiad()
  } catch (err) {
    console.log(err)
  }
}

export const setCompletedOlimpiads = (olimpiads: CompletedOlimpiad[]) => {
  useOlimpiad.update((state) => {
    return {
      olimpiads: state ? state.olimpiads : [],
      subjects: state ? state.subjects : [],
      selectedOlimpiad: state ? state.selectedOlimpiad : null,
      selectedOlimpiadAnswers: state ? state.selectedOlimpiadAnswers : '',
      isStarted: state ? state.isStarted : false,
      completedOlimpiads: olimpiads,
    }
  })
}

export const startOlimpiad = () => {
  useOlimpiad.update((state) => {
    let answers: string[] = []

    if (state?.selectedOlimpiad) {
      for (
        let i = state?.selectedOlimpiad.expand.questions.length;
        i > 0;
        i--
      ) {
        answers.push('')
      }
    }

    return {
      olimpiads: state ? state.olimpiads : [],
      subjects: state ? state.subjects : [],
      selectedOlimpiad: state ? state.selectedOlimpiad : null,
      selectedOlimpiadAnswers: answers.join(','),
      isStarted: true,
      completedOlimpiads: [],
    }
  })
}

export const endOlimpiad = () => {
  useOlimpiad.update((state) => {
    return {
      olimpiads: state ? state.olimpiads : [],
      subjects: state ? state.subjects : [],
      selectedOlimpiad: null,
      selectedOlimpiadAnswers: '',
      isStarted: false,
      completedOlimpiads: [],
    }
  })
}

export const updateAnswers = (answer: string, index: number) => {
  useOlimpiad.update((state) => {
    if (state?.selectedOlimpiadAnswers) {
      const answers: string[] = state?.selectedOlimpiadAnswers.split(',')

      if (answers.length > index) {
        answers[index] = answer
      }

      return {
        olimpiads: state ? state.olimpiads : [],
        subjects: state ? state.subjects : [],
        selectedOlimpiad: state ? state.selectedOlimpiad : null,
        selectedOlimpiadAnswers: answers.join(','),
        isStarted: true,
        completedOlimpiads: [],
      }
    } else {
      return {
        olimpiads: state ? state.olimpiads : [],
        subjects: state ? state.subjects : [],
        selectedOlimpiad: state ? state.selectedOlimpiad : null,
        selectedOlimpiadAnswers: state ? state.selectedOlimpiadAnswers : '',
        isStarted: true,
        completedOlimpiads: [],
      }
    }
  })
}
