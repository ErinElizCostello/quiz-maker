import React from 'react';
import { Link } from 'react-router-dom';
import ListOfQuizzes from './quizTaker/listOfQuizzes';



const LandingPage = () => {
  return (
    <div>
      <div>
        <Link to='/login'>Login</Link>
      </div>
      <div>
        <Link to='/signup'>Sign up</Link>
      </div>
      <div>
        <Link to='/createAQuiz'>Create A Quiz!</Link>
      </div>
      <div>
        <ListOfQuizzes />
      </div>
    </div>
  );
}

export default LandingPage;