import {
  ADD_ANSWER,
  INIT_QUESTIONS,
  SET_SCORE,
  NEXT_QUESTION,
  END_QUIZ
} from '../constants/ActionTypes'

const initialState = {
  questions: null,
  activeQuestion: 'not_init',
  score: null,
  answersReview: null,
  endQuiz: false
}

export default function quizAnswers (state = initialState, action) {
  switch (action.type) {
    case ADD_ANSWER:
      const questions = state.questions.slice()
      const active = Object.assign(
        {},
        questions[state.activeQuestion]
      )
      active.answer = action.payload
      questions[state.activeQuestion] = active
      const nextQuestion = (state.activeQuestion + 1 < state.questions.length)
        ? state.activeQuestion + 1
        : state.activeQuestion
      return {
        ...state,
        activeQuestion: nextQuestion,
        questions
      }
    case INIT_QUESTIONS:
      const newQuestions = action.payload.slice()
      return {
        ...state,
        questions: newQuestions,
        activeQuestion: 0
      }
    case NEXT_QUESTION:
      return {
        ...state,
        activeQuestion: action.payload
      }
    case SET_SCORE:
      return {
        ...state,
        ...action.payload
      }
    case END_QUIZ:
      return {
        ...state,
        endQuiz: true
      }
    default:
      return state
  }
}
