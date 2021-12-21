import { SET_QUIZ_TITLE } from '../constants'


export const setQuizTitle = (state = '', action) => {
  switch (action.type) {
    case SET_QUIZ_TITLE:
      return action.data;
    default:
      return state;
  }
}
