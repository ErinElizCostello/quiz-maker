import React from 'react';
import { Link } from 'react-router-dom';
import CreateQuizButton from './createQuizButton';
import QuestionsDisplay from './questionsDisplay';
import QuestionsForm from './questionsForm';



const QuizMaker = () => {
  return (
    <div>
      <Link to="/">
      <button>Back</button>
      </Link>
      <QuestionsForm />
      <CreateQuizButton />
      <QuestionsDisplay />
    </div>
  );
}

export default QuizMaker;