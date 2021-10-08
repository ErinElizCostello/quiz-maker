import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'

import { createAQuiz } from '../../API/createAQuiz';
import { setQuestion } from '../../state/actions/questions';



const CreateQuizButton = () => {
  const dispatch = useDispatch()

  const theUser = JSON.parse(localStorage.getItem('QuizUser')).payload.user

  const [redirectToHomePage, setRedirectToHomePage] = useState(false)

  let theQuiz = useSelector(state => state)
  
  const createTheQuiz = async () => {
    await createAQuiz(theQuiz.setQuestion[0].title, theQuiz.setQuestion, theUser, theQuiz.setResults)

    setRedirectToHomePage(true)
    // dispatch(setQuestion([]))
  }

  return (
    
    <div>
      {redirectToHomePage && <Redirect to={{ pathname: '/' }}></Redirect>}
      <button onClick={createTheQuiz}>Create Quiz</button>
    </div>
  );
}

export default CreateQuizButton;