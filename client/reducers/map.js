import {
  UPDATE_MAP
} from '../constants/ActionTypes'

const initialState = {
  map: []
}

export default function quizAnswers (state = initialState, action) {
  switch (action.type) {
    case UPDATE_MAP:
      return {
        map: action.payload
      }

    default:
      return state
  }
}
