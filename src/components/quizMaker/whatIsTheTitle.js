import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setQuizTitle } from '../../state/actions/quizTitle';

import BackButton from '../backButton'

import '../../styles/whatIsTheTitle.css'



const WhatIsTheTitle = () => {

  const dispatch = useDispatch()

  const [titleText, setTitleText] = useState(null)

  const onChangeTitleText = event => setTitleText(event.target.value)

  const saveTitle = () => dispatch(setQuizTitle(titleText))

  return (
    <div>
      <div>
        <BackButton />
      </div>
      <div id="spacer-title-small-screen"></div>
      <div className="layoutWhatIsTheTitle">
        <div>
          <label className="whatIsTheTitleLabel">
            What is the Title?
          </label>
          <br />
          <textarea
            id="option"
            className="textAreaWhatIsThetTitle"
            name="option"
            rows="2"
            cols="40"
            onChange={title => onChangeTitleText(title)}
          />
        </div>
        <div>
          {
            titleText ?
              <Link to="/numberOfAnswers">
                <button id="non-disabled-button-title" onClick={saveTitle}>
                  next...
                </button>
              </Link>
              :
              <button id="disabled-button-title" disabled>
                next...
              </button>
          }
        </div>
      </div>
    </div>
  );
}

export default WhatIsTheTitle;