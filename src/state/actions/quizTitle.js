import { SET_QUIZ_TITLE } from '../constants'


export const setQuizTitle = (title) => ({
  type: SET_QUIZ_TITLE,
  data: title
})