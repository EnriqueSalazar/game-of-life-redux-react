import {combineReducers} from 'redux'
import quizEntry from './quizEntryReducer'
import quizAnswers from './quizAnswersReducer'
import apollo from '../apolloClient'

const rootReducer = combineReducers({
  quizEntry,
  quizAnswers,
  apollo: apollo.reducer()
})

export default rootReducer
