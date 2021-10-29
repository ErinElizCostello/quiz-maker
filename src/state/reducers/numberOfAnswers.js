import { SET_NUMBER_OF_ANSWERS } from '../constants'



export const setNumberOfAnswers = (state = 2, action) => {
  switch (action.type) {
    case SET_NUMBER_OF_ANSWERS:
      return action.data;
    default:
      return state;
  }
}