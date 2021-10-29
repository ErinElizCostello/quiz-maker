import React from 'react';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { verifyTheUser } from '../API/verifyTheUser';

import { clearQuestions } from '../state/actions/questions';



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
    <div>
      <div>
        {`Hello ${JSON.parse(localStorage.getItem('QuizUser')).payload.user}`}
      </div>
      <div>
        <button onClick={logOutUser}>
          Log Out
        </button>
      </div>
      <Link to="/myQuizzes">
        <div onClick={verify}>
          My quizzes
        </div>
      </Link>
      <div>
        <Link
          onClick={clearOldData}
          to='/createAQuiz'
        >
          Create A Quiz!
        </Link>
      </div>
      <div>
        <Link to='/deleteUserAccount'>
          Delete my account
        </Link>
      </div>
    </div>
  );
}

export default LoggedInOptions;

