import * as types from '../constants/ActionTypes'

export const setToken = (token, subject) =>
({type: types.SET_TOKEN, payload: {token, subject}})

export const toggleInterest = subject =>
({type: types.TOGGLE_INTEREST, payload: subject})

export const toggleTerm = () =>
({type: types.TOGGLE_TERM})

export const endQuiz = () =>
({type: types.END_QUIZ})

export const nextQuestion = index =>
  ({type: types.NEXT_QUESTION, payload: index})

export const updateDetails = (field, value) =>
({type: types.UPDATE_DETAILS, payload: {field, value}})

export const addAnswer = answer =>
({type: types.ADD_ANSWER, payload: answer})

export const initQuestions = questions =>
({type: types.INIT_QUESTIONS, payload: questions})

export const setScore = score =>
({type: types.SET_SCORE, payload: score})

export const setResponse = response =>
({type: types.SET_RESPONSE, payload: response})
