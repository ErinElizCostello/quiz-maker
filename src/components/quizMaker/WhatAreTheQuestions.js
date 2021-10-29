import React from 'react';

import QuestionsDisplay from './questionsDisplay';
import QuestionsForm from './questionsForm';



const WhatAreTheQuestions = () => {
  return (
    <div>
      <QuestionsForm />
      <QuestionsDisplay />
    </div>
  );
}

export default WhatAreTheQuestions;