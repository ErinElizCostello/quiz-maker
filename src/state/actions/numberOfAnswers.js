import { SET_NUMBER_OF_ANSWERS } from '../constants'


export const setNumberOfAnswers = (number) => ({
  type: SET_NUMBER_OF_ANSWERS,
  data: number
})