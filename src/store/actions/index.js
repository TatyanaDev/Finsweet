import ACTION_TYPES from './types'

export const getReviewsRequest = () => ({
  type: ACTION_TYPES.GET_REVIEWS_REQUEST
})

export const getReviewsSuccess = dataReviews => ({
  type: ACTION_TYPES.GET_REVIEWS_SUCCESS,
  dataReviews
})

export const getReviewsError = errReviews => ({
  type: ACTION_TYPES.GET_REVIEWS_ERROR,
  errReviews
})

export const getQuestionsRequest = () => ({
  type: ACTION_TYPES.GET_QUESTIONS_REQUEST
})

export const getQuestionsSuccess = dataQuestions => ({
  type: ACTION_TYPES.GET_QUESTIONS_SUCCESS,
  dataQuestions
})

export const getQuestionsError = errQuestions => ({
  type: ACTION_TYPES.GET_QUESTIONS_ERROR,
  errQuestions
})
