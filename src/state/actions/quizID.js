import { SET_QUIZ_ID } from '../constants'


export const setQuizID = (id) => ({
    type: SET_QUIZ_ID,
    data: id
  })