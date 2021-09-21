import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from '../components/landingPage';
import QuizMaker from '../components/quizMaker/quizMaker'
import Quiz from '../components/quizTaker/quiz';
import Login from '../components/signUpAndLogin/login';
import SignUp from '../components/signUpAndLogin/signUp';
import MyQuizzes from '../components/user/myQuizzes';
import SecuredMyQuizzes from './securedMyQuizzes';

const Routes = () => {
  return (
    <div >
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
       
        <Route path='/createAQuiz'>
          <QuizMaker />
        </Route>
        <Route path='/quiz'>
          <Quiz />
        </Route>
        <SecuredMyQuizzes path={`/myQuizzes`} component={MyQuizzes} />
      </Switch>
    </div>
  );
}

export default Routes;