import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setNumberOfAnswers } from '../../state/actions/numberOfAnswers';
import BackButton from '../backButton';

const HowManyPossibleAnswers = () => {

  const dispatch = useDispatch()

  const [number, setNumber] = useState('')

  const onChangeNumber = (event) => {
    setNumber(Number(event.target.value))
  }

  const chooseNumberOfAnswers = () => {
    dispatch(setNumberOfAnswers(number))
  }

  return (
    <div>
      <div>
        <BackButton />
      </div>
      <div>How many possible answers do you want your quiz questions to have? You can choose up to 12</div>
      <br /><br />

      <div>
        <label for="numberOfAnswers">number of Answers</label>

        <select name="numberOfAnswers" id="numberOfAnswers"
          onChange={e => onChangeNumber(e)}
          value={number}
        >
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
      <div>
        <Link to='/questions'>
          <button onClick={chooseNumberOfAnswers}>next...</button>
        </Link>
      </div>
    </div>
  );
}

export default HowManyPossibleAnswers;