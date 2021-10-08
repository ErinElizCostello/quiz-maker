import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DeleteUserAccount from '../components/deleteUserAccount';

import LandingPage from '../components/landingPage';
import QuizMaker from '../components/quizMaker/quizMaker'
import ResultsForm from '../components/quizMaker/resultsForm';
import QuizPage from '../components/quizTaker/quizPage';
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
       <Route path="/deleteUserAccount">
         <DeleteUserAccount />
       </Route>
        <Route path='/createAQuiz'>
          <QuizMaker />
        </Route>
        <Route path='/resultsForm'>
          <ResultsForm />
        </Route>
        <Route path='/quiz'>
          <QuizPage />
        </Route>
        <SecuredMyQuizzes path={`/myQuizzes`} component={MyQuizzes} />
      </Switch>
    </div>
  );
}

export default Routes;