import { SET_HOW_MANY_ANSWERS } from '../constants'


export const setHowManyAnswers = ( numberOfAnswers ) => {
  return({
    type: SET_HOW_MANY_ANSWERS,
    data: numberOfAnswers
  })
}