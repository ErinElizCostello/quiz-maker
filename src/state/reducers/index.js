import { combineReducers } from 'redux';
import { setHowManyAnswers } from './setHowManyAnswers'
import { setQuestion } from './questions';
import { setQuizID } from './quizID';

const rootReducer = combineReducers({
  setHowManyAnswers,
  setQuestion,
  setQuizID
});

export default rootReducer