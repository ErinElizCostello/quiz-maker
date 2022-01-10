import React from 'react';

import { Switch, Route } from 'react-router-dom';

import DeleteUserAccount from '../components/deleteUserAccount';
import LandingPage from '../components/landingPage';
import WhatAreTheQuestions from '../components/quizMaker/WhatAreTheQuestions'
import ResultsForm from '../components/quizMaker/resultsForm';
import WhatIsTheTitle from '../components/quizMaker/whatIsTheTitle';
import QuizPage from '../components/quizTaker/quizPage';
import Login from '../components/signUpAndLogin/login';
import SignUp from '../components/signUpAndLogin/signUp';
import MyQuizzes from '../components/user/myQuizzes';
import SecuredMyQuizzes from './securedMyQuizzes';
import HowManyPossibleAnswers from '../components/quizMaker/howManyPossibleAnswers';
import AdminPage from '../components/adminPage';
import SecuredCreateAQuiz from './securedCreateAQuiz';


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
        <SecuredCreateAQuiz
          path={`/createAQuiz`}
          component={WhatIsTheTitle}
        />
        <Route path='/numberOfAnswers'>
          <HowManyPossibleAnswers />
        </Route>
        <Route path='/questions'>
          <WhatAreTheQuestions />
        </Route>
        <Route path='/resultsForm'>
          <ResultsForm />
        </Route>
        <Route path='/quiz'>
          <QuizPage />
        </Route>
        <Route path='/admin'>
          <AdminPage />
        </Route>
        <SecuredMyQuizzes
          path={`/myQuizzes`}
          component={MyQuizzes}
        />
      </Switch>
    </div>
  );
}

export default Routes;