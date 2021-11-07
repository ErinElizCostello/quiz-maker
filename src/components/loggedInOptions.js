import React from 'react';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { verifyTheUser } from '../API/verifyTheUser';

import { clearQuestions } from '../state/actions/questions';

import '../styles/loggedInOptions.css'



const LoggedInOptions = () => {
  const dispatch = useDispatch()

  const verify = () => {
    const token = JSON.parse(localStorage.getItem('QuizUser')) && JSON.parse(localStorage.getItem('QuizUser')).token

    verifyTheUser(token)
  }

  const logOutUser = () => {
    localStorage.removeItem('QuizUser')
    window.location.reload()
  }

  const clearOldData = () => dispatch(clearQuestions([]))

  return (
    <div className="container">
      <div className="left-side-navbar">
      <Link className="link" to="/myQuizzes">
          <div onClick={verify}>
            <p className="greeting">
            {`${JSON.parse(localStorage.getItem('QuizUser')).payload.user}'s Quizzes`}
            </p>
          </div>
        </Link>
        {/* <div>
          <p className="greeting">
            {`Hello ${JSON.parse(localStorage.getItem('QuizUser')).payload.user}`}
          </p>
        </div> */}
      </div>
      <div className="middle-navbar"></div>
      <div className="right-side-navbar">
        {/* <Link className="link" to="/myQuizzes">
          <div onClick={verify}>
            <p className="myQuizzes">
              My quizzes
            </p>
          </div>
        </Link> */}
        <div>
          <Link
            className="link"
            onClick={clearOldData}
            to='/createAQuiz'
          >
            <p className="createAQuiz">
              Create a quiz
            </p>
          </Link>
        </div>
        <div onClick={logOutUser}>
          {/* <button onClick={logOutUser}> */}
          <p className="logOut">
            Log Out
          </p>
          {/* </button> */}
        </div>
        {/* <div>
          <Link className="link" to='/deleteUserAccount'>
            <p className="settings">
              Settings
            </p>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default LoggedInOptions;

