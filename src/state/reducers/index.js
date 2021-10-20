import { combineReducers } from 'redux';
// import { setHowManyAnswers } from './setHowManyAnswers'
import { setQuestion } from './questions';
import { setQuizID } from './quizID';
import { setResults } from './results';
import { setResultOfQuizTaken} from './resultOfQuizTaken'
import { setQuizTitle } from './quizTitle';
import { setNumberOfAnswers } from './numberOfAnswers';

const rootReducer = combineReducers({
  // setHowManyAnswers,
  setQuestion,
  setQuizID,
  setResults,
  setResultOfQuizTaken,
  setQuizTitle,
  setNumberOfAnswers
});

export default rootReducer