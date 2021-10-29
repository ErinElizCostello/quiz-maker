import { SET_RESULTS_OF_QUIZ_TAKEN } from '../constants'



export const setResultOfQuizTaken = (state = [], action) => {
  switch (action.type) {
    case SET_RESULTS_OF_QUIZ_TAKEN:
      return action.data;
    default:
      return state;
  }
}