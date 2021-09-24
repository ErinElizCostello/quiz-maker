import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAUsersQuizzes } from '../../API/getAUsersQuizzes';
import { setQuizID } from '../../state/actions/quizID';

const MyQuizzes = () => {
 const dispatch = useDispatch()

  const theUser = JSON.parse(localStorage.getItem('QuizUser')).payload.user

  const [usersQuizzes, setUsersQuizzes] = useState([])

  useEffect(() => {
    getAUsersQuizzes(theUser)
      .then(quizzes => {
        console.log(quizzes)
        setUsersQuizzes(quizzes.data)
      })
  }, []);

  const quizID = (id) => dispatch(setQuizID(id))

  

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
          </div>
        ))
      }
    </div>
  );
}

export default MyQuizzes;