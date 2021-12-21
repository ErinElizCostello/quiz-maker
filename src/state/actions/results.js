import { SET_RESULTS, CLEAR_RESULTS  } from '../constants'


export const setResults = (results) => ({
  type: SET_RESULTS,
  data: results
})

export const clearResults = (emptyArray) => ({
  type: CLEAR_RESULTS,
  data: emptyArray
})