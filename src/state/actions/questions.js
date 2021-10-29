import { SET_QUESTION, DELETE_QUESTION, CLEAR_QUESTIONS } from '../constants'



export const setQuestion = (question) => ({
  type: SET_QUESTION,
  data: question
})

export const deleteQuestion = (updatedListOfQuestions) => ({
  type: DELETE_QUESTION,
  data: updatedListOfQuestions
})

export const clearQuestions = (emptyArray) => ({
  type: CLEAR_QUESTIONS,
  data: emptyArray
})