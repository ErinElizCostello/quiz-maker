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
// import PreviewResultsAndCreateQuiz from '../woops/previewResultsAndCreateQuiz';

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
          <WhatIsTheTitle />
        </Route>
        <Route path='/numberOfAnswers'>
          <HowManyPossibleAnswers />
        </Route>
        <Route path='/questions'>
          <WhatAreTheQuestions />
        </Route>
        <Route path='/resultsForm'>
          <ResultsForm />
        </Route>
        {/* <Route path='/previewResults'>
          <PreviewResultsAndCreateQuiz />
        </Route> */}
        <Route path='/quiz'>
          <QuizPage />
        </Route>
        <SecuredMyQuizzes path={`/myQuizzes`} component={MyQuizzes} />
      </Switch>
    </div>
  );
}

export default Routes;