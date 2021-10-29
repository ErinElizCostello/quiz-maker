import React from 'react';

import ListOfQuizzes from './quizTaker/listOfQuizzes';
import LoggedInOptions from './loggedInOptions';
import LoggedOutOptions from './loggedOutOptions';



const LandingPage = () => {
  return (
    <div>
      {
        localStorage.getItem('QuizUser') ?
          <LoggedInOptions />
          :
          <LoggedOutOptions />
      }
      <ListOfQuizzes />
    </div>
  );
}

export default LandingPage;