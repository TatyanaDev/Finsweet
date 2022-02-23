import { combineReducers } from 'redux'
import questionsReducer from './questions'
import reviewsReducer from './reviews'

const rootReducer = combineReducers({
  objReviews: reviewsReducer,
  objQuestions: questionsReducer
})

export default rootReducer
