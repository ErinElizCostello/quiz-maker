import React, { useState, useEffect } from 'react';
import { getAUsersQuizzes } from '../../API/getAUsersQuizzes';

const MyQuizzes = () => {

  const theUser = JSON.parse(localStorage.getItem('QuizUser')).payload.user

  const [usersQuizzes, setUsersQuizzes] = useState([])

  useEffect(() => {
    getAUsersQuizzes(theUser)
      .then(quizzes => {
        console.log(quizzes)
        setUsersQuizzes(quizzes.data)
      })
  }, []);

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
          </div>
        ))
      }
    </div>
  );
}

export default MyQuizzes;