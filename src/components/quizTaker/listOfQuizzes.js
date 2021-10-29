import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setQuizID } from '../../state/actions/quizID';
import { setResultOfQuizTaken } from '../../state/actions/resultOfQuizTaken'
import { setResults } from '../../state/actions/results'



const ListOfQuizzes = () => {

  const dispatch = useDispatch()

  const [quizzesList, setQuizzesList] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/quizzes')
      .then(response => response.json())
      .then(data => {
        setQuizzesList(data.data)
      })
  }, []);

  const quizID = id => {
    dispatch(setResultOfQuizTaken([]))
    dispatch(setResults([]))
    dispatch(setQuizID(id))
  }

  return (
    <div>
      {
        quizzesList.map(quiz => (
          <div style={{ height: 100, width: 200, border: '1px solid black' }}>
            <div>
              {quiz.title}
            </div>
            <div>
              {quiz.user}
            </div>
            <div>
              <Link
                to='/quiz'
                onClick={() => quizID(quiz._id)}
              >
                Take quiz
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default ListOfQuizzes;