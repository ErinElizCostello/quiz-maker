import { combineReducers } from 'redux';
import { setHowManyAnswers } from './setHowManyAnswers'
import { setQuestion } from './questions';


const rootReducer = combineReducers({
  setHowManyAnswers,
  setQuestion
});

export default rootReducer