export interface Question {
  subject: string
  difficulty: number
  question: string
  answer: string
}

export interface Olimpiad {
  id: string
  subject: string
  expand: {
    questions: Question[]
  }
  created: string
}
