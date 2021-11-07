import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setQuizID } from '../../state/actions/quizID';
import { setResultOfQuizTaken } from '../../state/actions/resultOfQuizTaken'
import { setResults } from '../../state/actions/results'

import '../../styles/listOfQuizzes.css'



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
          <div className="quizCard">
            <div>
              <p className="quizCardTitle">
                {quiz.title}
              </p>
            </div>
            <div>
              <p className="username">
                {`created by ${quiz.user}`}
              </p>
            </div>
            <div>
              <Link
                className="link"
                to='/quiz'
                onClick={() => quizID(quiz._id)}
              >
                <p className="linkToQuiz">
                  Take quiz
                </p>
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default ListOfQuizzes;