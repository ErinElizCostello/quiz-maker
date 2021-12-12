import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setNumberOfAnswers } from '../../state/actions/numberOfAnswers';
import { clearQuestions } from '../../state/actions/questions';

import BackButton from '../backButton';

import '../../styles/howManyPossibleAnswers.css'



const HowManyPossibleAnswers = () => {

  const dispatch = useDispatch()

  const [number, setNumber] = useState(null)

  const onChangeNumber = event => setNumber(Number(event.target.value))

  const chooseNumberOfAnswers = () => {
    dispatch(setNumberOfAnswers(number))
    dispatch(clearQuestions([]))
  }

  return (
    <div>
      <div>
        <BackButton />
      </div>
      <div id="spacer-answers-number"></div>
      <div className="titleHowManyPossibleAnswers">
        <p>
          How many possible answers do you want your quiz questions to have? <br /> You can choose up to 12
        </p>
      </div>
      <br /><br />
      <div className="numberOfAnswers">
        <label className="labelNumberOfAnswers" for="numberOfAnswers">
          Number of Answers:
        </label>
        <select
          className="selectNumberOfAnswers"
          name="numberOfAnswers"
          id="numberOfAnswers"
          onChange={e => onChangeNumber(e)}
          value={number}
        >
          <option value="">choose</option>
          <option value="2">2 answers</option>
          <option value="3">3 answers</option>
          <option value="4">4 answers</option>
          <option value="5">5 answers</option>
          <option value="6">6 answers</option>
          <option value="7">7 answers</option>
          <option value="8">8 answers</option>
          <option value="9">9 answers</option>
          <option value="10">10 answers</option>
          <option value="11">11 answers</option>
          <option value="12">12 answers</option>
        </select>
        
      </div>
      <div className="nextButtonHowManyPossibleAnswersLayout">
          {
            number ?
              <Link to='/questions'>
                <button
                id="non-disabled-button-answers-number"
                onClick={chooseNumberOfAnswers}>
                  next...
                </button>
              </Link>
              :
              <button id="disabled-button-answers-number" disabled>
                next...
              </button>
          }
        </div>
    </div>
  );
}

export default HowManyPossibleAnswers;