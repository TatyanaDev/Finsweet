import ACTION_TYPES from '../actions/types'

const initialState = {
  loadingQuestions: false,
  questions: [],
  errorQuestions: null
}

export default function questionsReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_QUESTIONS_REQUEST:
      return { ...state, loadingQuestions: (state.loadingQuestions = true) }
    case ACTION_TYPES.GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        loadingQuestions: (state.loadingQuestions = false),
        questions: (state.questions = action.dataQuestions)
      }
    case ACTION_TYPES.GET_QUESTIONS_ERROR:
      return {
        ...state,
        loadingQuestions: (state.loadingQuestions = false),
        errorQuestions: (state.errorQuestions = action.errorQuestions)
      }
    default:
      return state
  }
}
