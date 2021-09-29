import { combineReducers } from 'redux';
import { setHowManyAnswers } from './setHowManyAnswers'
import { setQuestion } from './questions';
import { setQuizID } from './quizID';
import { setResults } from './results';
import { setResultOfQuizTaken} from './resultOfQuizTaken'

const rootReducer = combineReducers({
  setHowManyAnswers,
  setQuestion,
  setQuizID,
  setResults,
  setResultOfQuizTaken
});

export default rootReducer