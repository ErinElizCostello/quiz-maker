import React from 'react';
import { Link } from 'react-router-dom';
import CreateQuizButton from './createQuizButton';
import QuestionsDisplay from './questionsDisplay';
import QuestionsForm from './questionsForm';
import ResultsForm from './resultsForm';



const WhatAreTheQuestions = () => {
  return (
    <div>
      <QuestionsForm />
      <QuestionsDisplay />
    </div>
  );
}

export default WhatAreTheQuestions;