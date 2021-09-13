import { SET_HOW_MANY_ANSWERS } from '../constants'



export const setHowManyAnswers = (state = 0, action) => {
  switch (action.type) {
    case SET_HOW_MANY_ANSWERS:
      return action.data;
    default:
      return state;
  }
}