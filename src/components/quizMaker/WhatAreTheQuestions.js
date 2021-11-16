import React from 'react';
import BackButton from '../backButton';

import QuestionsDisplay from './questionsDisplay';
import QuestionsForm from './questionsForm';

import '../../styles/whatAreTheQuestions.css'



const WhatAreTheQuestions = () => {
  return (
    <div>
      <BackButton />
      <div className="layoutQuestions">
        {/* <div> */}
          <QuestionsForm />
        {/* </div>
        <div className="questionsDisplayBorder"> */}
          <QuestionsDisplay />
        {/* </div> */}
      </div>
    </div>
  );
}

export default WhatAreTheQuestions;