import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setQuizID } from '../../state/actions/quizID';


const ListOfQuizzes = () => {

  const dispatch = useDispatch()
  // const getQuizzes = () => {
  //   return fetch('http://localhost:3001/quizzes')
  //     .then(response => response.json())
  //     .then(data => console.log('data', data))
  // }

  const [quizzesList, setQuizzesList] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/quizzes')
      .then(response => response.json())
      .then(data => {
        console.log('data', data)
        setQuizzesList(data.data)
      })

  }, []);

  const quizID = id => {
    console.log('id', id)
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
              <Link to='/quiz' onClick={() => quizID(quiz._id)}>
                Take quiz
              </Link>
            </div>
          </div>
        ))
      }

      {/* <button onClick={getQuizzes}>Get quizzzz</button> */}
    </div>
  );
}

export default ListOfQuizzes;