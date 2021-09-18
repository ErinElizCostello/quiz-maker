import { SET_QUIZ_ID } from '../constants'


export const setQuizID = (state = null, action) => {
  switch (action.type) {
    case SET_QUIZ_ID:
      return action.data;
    default:
      return state;
  }
}
