import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import MyQuizzes from '../components/user/myQuizzes'



const SecuredMyQuizzes = () => {
  return (
    <div>
      <Route
        render={() =>
          localStorage.getItem('QuizUser')
            ?
            (<MyQuizzes />)
            :
            (<Redirect to={{ pathname: '/login' }} />)}
      >
      </Route>
    </div>
  );
}

export default SecuredMyQuizzes;