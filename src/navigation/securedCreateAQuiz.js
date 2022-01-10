import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import WhatIsTheTitle from '../components/quizMaker/whatIsTheTitle'



const SecuredCreateAQuiz = () => {
  return (
    <div>
      <Route
        render={() =>
          localStorage.getItem('QuizUser')
            ?
            (<WhatIsTheTitle />)
            :
            (<Redirect to={{ pathname: '/login' }} />)}
      >
      </Route>
    </div>
  );
}

export default SecuredCreateAQuiz;