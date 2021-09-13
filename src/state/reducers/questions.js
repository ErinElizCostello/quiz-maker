import { DELETE_QUESTION, SET_QUESTION } from '../constants'


export const setQuestion = (state = [], action) => {
  switch (action.type) {
    case SET_QUESTION:
      return [...state, action.data];
      case DELETE_QUESTION:
        return [...action.data]
    default:
      return state;
  }
}
