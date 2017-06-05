import {
  TOGGLE_INTEREST, UPDATE_DETAILS,
  TOGGLE_TERM, SET_TOKEN,
  SET_RESPONSE
} from '../constants/ActionTypes'

const initialState = {
  token: null,
  reCaptchaResponse: null,
  subject: null,
  data: {
    termsOfService: false,
    details: {
      firstname: null,
      lastname: null,
      email: null,
      github: null
    },
    interests: {
      'Net': false,
      'Android': false,
      'Angular': false,
      'Clojure': false,
      'iOS': false,
      'Java': false,
      'JavaScript': false,
      'Node': false,
      'React': false,
      'Scala': false
    }
  }
}

export default function quizEntry (state = initialState, action) {
  const data = state.data
  switch (action.type) {
    case TOGGLE_INTEREST:
      data.interests[action.payload] = !data.interests[action.payload]
      return {
        ...state,
        data
      }
    case TOGGLE_TERM:
      data.termsOfService = !data.termsOfService
      return {
        ...state,
        data
      }
    case UPDATE_DETAILS:
      data.details[action.payload.field] = action.payload.value
      return {
        ...state,
        data
      }
    case SET_RESPONSE:
      return {
        ...state,
        reCaptchaResponse: action.payload
      }
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload.token,
        subject: action.payload.subject
      }
    default:
      return state
  }
}
