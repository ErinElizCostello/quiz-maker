import React from 'react';
import { Link } from 'react-router-dom';
import CreateQuizButton from './createQuizButton';
import QuestionsDisplay from './questionsDisplay';
import QuestionsForm from './questionsForm';
import ResultsForm from './resultsForm';



const QuizMaker = () => {
  return (
    <div>
      <Link to="/">
      <button>Back</button>
      </Link>
      <QuestionsForm />
      <ResultsForm />
      <CreateQuizButton />
      <QuestionsDisplay />
    </div>
  );
}

export default QuizMaker;