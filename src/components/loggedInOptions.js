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
        <div className="middle-navbar">
          <div className="headerTitle">
            <p>QUIZMAKER</p>
            <p className="blue">5</p>
            <p className="green">0</p>
            <p className="yellow">0</p>
            <p className="pink">0</p>
          </div>
        </div>
      </div>

      <div className="right-side-navbar">
        <Link className="link" to="/myQuizzes">
          <div onClick={verify}>
            <p className="greeting">
              {`${JSON.parse(localStorage.getItem('QuizUser')).payload.user}'s Quizzes`}
            </p>
          </div>
        </Link>

        {
          JSON.parse(localStorage.getItem('QuizUser')).payload.user === process.env.REACT_APP_ADMIN &&
          <div>
            <Link to="/admin">
              <p className="createAQuiz">
                admin
              </p>
            </Link>
          </div>
        }

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
          <p className="logOut">
            Log Out
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoggedInOptions;

