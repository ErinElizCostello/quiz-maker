import { SET_RESULTS } from '../constants'


export const setResults = (state = {}, action) => {
  switch (action.type) {
    case SET_RESULTS:
      return action.data;
    default:
      return state;
  }
}