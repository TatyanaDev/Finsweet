import ACTION_TYPES from '../actions/types'

const initialState = {
  loadingReviews: false,
  reviews: [],
  errorReviews: null
}

export default function reviewsReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_REVIEWS_REQUEST:
      return { ...state, loadingReviews: (state.loadingReviews = true) }
    case ACTION_TYPES.GET_REVIEWS_SUCCESS:
      return {
        ...state,
        loadingReviews: (state.loadingReviews = false),
        reviews: (state.reviews = action.dataReviews)
      }
    case ACTION_TYPES.GET_REVIEWS_ERROR:
      return {
        ...state,
        loadingReviews: (state.loadingReviews = false),
        errorReviews: (state.errorReviews = action.errReviews)
      }
    default:
      return state
  }
}
