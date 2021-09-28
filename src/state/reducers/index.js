import { combineReducers } from 'redux';
import { setHowManyAnswers } from './setHowManyAnswers'
import { setQuestion } from './questions';
import { setQuizID } from './quizID';
import { setResults } from './results';

const rootReducer = combineReducers({
  setHowManyAnswers,
  setQuestion,
  setQuizID,
  setResults
});

export default rootReducer