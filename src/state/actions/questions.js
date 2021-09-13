import { SET_QUESTION, DELETE_QUESTION } from '../constants'

export const setQuestion = (question) => ({
  type: SET_QUESTION,
  data: question
})

export const deleteQuestion = (updatedListOfQuestions) => ({
  type: DELETE_QUESTION,
  data: updatedListOfQuestions
})