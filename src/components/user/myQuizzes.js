import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAUsersQuizzes } from '../../API/getAUsersQuizzes';
import { setQuizID } from '../../state/actions/quizID';
import { deleteAQuiz } from '../../API/deleteAQuiz';

import { setResultOfQuizTaken } from '../../state/actions/resultOfQuizTaken'
import { setResults } from '../../state/actions/results'
// import BackToMyQuizzes from './backToMyQuizzes';




const MyQuizzes = () => {
 const dispatch = useDispatch()

  const theUser = localStorage.getItem('QuizUser')
  ? JSON.parse(localStorage.getItem('QuizUser')).payload.user : ''

  const [usersQuizzes, setUsersQuizzes] = useState([])

  useEffect(() => {
    getAUsersQuizzes(theUser)
      .then(quizzes => {
        console.log(quizzes)
        quizzes.success && setUsersQuizzes(quizzes.data)
      })
  }, []);

  const quizID = (id) => {
    dispatch(setResultOfQuizTaken([]))
    dispatch(setResults([]))
    dispatch(setQuizID(id))
  }
  
  const deleteTheQuiz = id => {
    return deleteAQuiz(id)
    .then( data => {
      console.log(data)
    })
  }
  

  return (
    <div>
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
              <button onClick={() => deleteTheQuiz(quiz._id)}>X</button>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default MyQuizzes;