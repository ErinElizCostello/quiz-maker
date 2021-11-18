import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'

import { createAQuiz } from '../API/createAQuiz';



const CreateQuizButton = () => {

  const theUser = JSON.parse(localStorage.getItem('QuizUser')).payload.user

  const [redirectToHomePage, setRedirectToHomePage] = useState(false)

  let theQuiz = useSelector(state => state)

  const createTheQuiz = async () => {
    await createAQuiz(theQuiz.setQuizTitle, theQuiz.setQuestion, theUser, theQuiz.setResults)

    setRedirectToHomePage(true)
  }

  return (

    <div>
      {
        redirectToHomePage &&
        <Redirect to={{ pathname: '/' }} />
      }
      <div>
        <button onClick={createTheQuiz}>
          Create Quiz
        </button>
      </div>
    </div>
  );
}

export default CreateQuizButton;