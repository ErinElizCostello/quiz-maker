import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import CreateAQuiz from '../components/user/createAQuiz'



const SecuredCreateAQuiz = () => {
  return (
    <div>
      <Route
        render={() =>
          localStorage.getItem('QuizUser')
            ?
            (<CreateAQuiz />)
            :
            (<Redirect to={{ pathname: '/login' }} />)}
      >
      </Route>
    </div>
  );
}

export default SecuredCreateAQuiz;