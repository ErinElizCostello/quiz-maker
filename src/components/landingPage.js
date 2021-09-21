import React from 'react';
import { Link } from 'react-router-dom';
import ListOfQuizzes from './quizTaker/listOfQuizzes';
import { verifyTheUser } from '../API/verifyTheUser';


const LandingPage = () => {


  const verify = () => {
    const token = JSON.parse(localStorage.getItem('QuizUser')) ? JSON.parse(localStorage.getItem('QuizUser')).token : ''

    verifyTheUser(token)
  }

  const logOutUser = () => {
    localStorage.removeItem('QuizUser')
  }

  return (
    <div>
      <div>
        <Link to='/login'>Login</Link>
      </div>
      <div>
        <Link to='/signup'>Sign up</Link>
      </div>
      <button onClick={logOutUser}>Log Out</button>
    
        
        <Link to="/myQuizzes">
        <div onClick={verify}>
          My quizzes
          </div>
          </Link>
     
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