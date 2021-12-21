import { SET_RESULTS_OF_QUIZ_TAKEN } from '../constants'


export const setResultOfQuizTaken = (result) => ({
  type: SET_RESULTS_OF_QUIZ_TAKEN,
  data: result
})