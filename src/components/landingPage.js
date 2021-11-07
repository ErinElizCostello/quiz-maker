import React from 'react';

import ListOfQuizzes from './quizTaker/listOfQuizzes';
import LoggedInOptions from './loggedInOptions';
import LoggedOutOptions from './loggedOutOptions';

import '../styles/landingPageLayout.css'


const LandingPage = () => {
  return (
    <div className="container">
      <div className="item-navbar">
        {
          localStorage.getItem('QuizUser') ?
            <LoggedInOptions className="item-navbar" />
            :
            <LoggedOutOptions className="item-navbar" />
        }
      </div>
      <div className="item-listOfQuizzes">
        <ListOfQuizzes className="item-listOfQuizzes" />
      </div>
      {/* <div className="item-navbar">
        {
          localStorage.getItem('QuizUser') ?
            <LoggedInOptions />
            :
            <LoggedOutOptions />
        }
      </div> */}

      {/* <div className='item-listOfQuizzes'>
        <ListOfQuizzes />
      </div> */}
    </div>
  );
}

export default LandingPage;