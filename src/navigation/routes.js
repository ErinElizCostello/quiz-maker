import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from '../components/landingPage';
import QuizMaker from '../components/quizMaker/quizMaker'
import Quiz from '../components/quizTaker/quiz';

const Routes = () => {
  return (
    <div >
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route path='/createAQuiz'>
          <QuizMaker />
        </Route>
        <Route path='/quiz'>
          <Quiz />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;