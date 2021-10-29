import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAUsersQuizzes } from '../../API/getAUsersQuizzes';

import { setQuizID } from '../../state/actions/quizID';
import { setResultOfQuizTaken } from '../../state/actions/resultOfQuizTaken'
import { setResults } from '../../state/actions/results'

import AreYouSureYouWantToDeleteThisQuiz from '../quizMaker/areYouSureYouWantToDeleteThisQuiz';
import BackButton from '../backButton';



const MyQuizzes = () => {
  const dispatch = useDispatch()

  const theUser = localStorage.getItem('QuizUser')
    && JSON.parse(localStorage.getItem('QuizUser')).payload.user

  const [usersQuizzes, setUsersQuizzes] = useState([])
  const [areYouSureMessage, setAreYouSureMessage] = useState(false)
  const [deleteQuizId, setDeleteQuizId] = useState(null)
  const [deleteQuizTitle, setDeleteQuizTitle] = useState(null)

  useEffect(() => {
    getAUsersQuizzes(theUser)
      .then(quizzes => {
        quizzes.success && setUsersQuizzes(quizzes.data)
      })
  }, []);

  const quizID = (id) => {
    dispatch(setResultOfQuizTaken([]))
    dispatch(setResults([]))
    dispatch(setQuizID(id))
  }

  const theAreYouSureMessage = (id, title) => {
    setDeleteQuizId(id)
    setDeleteQuizTitle(title)
    setAreYouSureMessage(true)

  }


  return (
    <div>
      <div>
        <BackButton backTo="home" />
      </div>
      {
        usersQuizzes.map(quiz => (
          <div style={{ border: '1px solid black' }}>
            <div>
              {quiz.title}
            </div>
            <div>
              {quiz.user}
            </div>
            <div>
              {quiz.createdAt}
            </div>
            <div onClick={() => quizID(quiz._id)}>
              <Link to='/quiz'>
                The Quiz
              </Link>
            </div>
            <div>
              <button onClick={() => theAreYouSureMessage(quiz._id, quiz.title)}>
                X
              </button>
            </div>
          </div>
        ))
      }
      <div>
        {areYouSureMessage &&
          <AreYouSureYouWantToDeleteThisQuiz
            quizInfo={{ deleteQuizId, deleteQuizTitle, setAreYouSureMessage }}
          />}
      </div>
    </div>
  );
}

export default MyQuizzes;