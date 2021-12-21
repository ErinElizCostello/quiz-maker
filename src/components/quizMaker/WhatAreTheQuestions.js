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
          <QuestionsForm />
          <QuestionsDisplay />
      </div>
    </div>
  );
}

export default WhatAreTheQuestions;