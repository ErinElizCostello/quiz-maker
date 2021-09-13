import React from 'react';
import CreateQuizButton from './createQuizButton';
import QuestionsDisplay from './questionsDisplay';
import QuestionsForm from './questionsForm';



const QuizMaker = () => {
  return (
    <div>
      <QuestionsForm />
      <CreateQuizButton />
      <QuestionsDisplay />
    </div>
  );
}

export default QuizMaker;