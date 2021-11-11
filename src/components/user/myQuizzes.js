import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAUsersQuizzes } from '../../API/getAUsersQuizzes';

import { setQuizID } from '../../state/actions/quizID';
import { setResultOfQuizTaken } from '../../state/actions/resultOfQuizTaken'
import { setResults } from '../../state/actions/results'

import AreYouSureYouWantToDeleteThisQuiz from '../quizMaker/areYouSureYouWantToDeleteThisQuiz';
import BackButton from '../backButton';

import moment from 'moment'

import '../../styles/myQuizzes.css'



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
      <div className="quizListLayout">
        {
          usersQuizzes.map(quiz => (
            <div>
              <div className="myQuizzesCard">
                <div onClick={() => quizID(quiz._id)}>
                  <Link to='/quiz'>
                    <p className="myQuizzesText">
                      {quiz.title}
                    </p>
                  </Link>
                </div>
                <div>
                  <p className="myQuizzesText">
                    {quiz.user}
                  </p>
                </div>
                <div>
                  <p className="myQuizzesText">
                    {moment(quiz.createdAt).format("MMM Do YYYY")}
                  </p>
                </div>
                {/* <div onClick={() => quizID(quiz._id)}>
                  <Link to='/quiz'>
                    <p className="myQuizzesText">
                      The Quiz
                    </p>
                  </Link>
                </div> */}
                <div className="myQuizzesText">
                  <button onClick={() => theAreYouSureMessage(quiz._id, quiz.title)}>
                    Delete this quiz
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div>
        {areYouSureMessage &&
        <div className={areYouSureMessage && "areYouSureModal"}>
          <AreYouSureYouWantToDeleteThisQuiz
            quizInfo={{ deleteQuizId, deleteQuizTitle, setAreYouSureMessage }}
          />
          </div>
          }
      </div>
    </div>
  );
}

export default MyQuizzes;