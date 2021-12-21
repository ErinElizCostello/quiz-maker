import { SET_RESULTS, CLEAR_RESULTS } from '../constants'


export const setResults = (state = [], action) => {
  switch (action.type) {
    case SET_RESULTS:
      return action.data;
    case CLEAR_RESULTS:
      return action.data
    default:
      return state;
  }
}