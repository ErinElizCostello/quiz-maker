import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setQuizTitle } from '../../state/actions/quizTitle';
import BackButton from '../backButton'


const WhatIsTheTitle = () => {

  const dispatch = useDispatch()

  const [titleText, setTitleText] = useState('')

  const onChangeTitleText = event => setTitleText(event.target.value)

  const saveTitle = () => {
    dispatch(setQuizTitle(titleText))
  }

  return (
    <div>
      <div>
        <BackButton />
      </div>
      <div>
        <label>What is the Title?</label><br />
        <textarea id="option" name="option" rows="2" cols="40" onChange={
          title => onChangeTitleText(title)}>
        </textarea>
      </div>
      <div>
        <Link to="/numberOfAnswers">
          <button onClick={saveTitle}>next...</button>
        </Link>
      </div>
    </div>
  );
}

export default WhatIsTheTitle;