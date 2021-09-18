import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { createAQuiz } from '../../API/createAQuiz';


const CreateQuizButton = () => {

  let theQuiz = useSelector(state => state)

  const createTheQuiz = () => {
    createAQuiz(theQuiz.setQuestion[0].title, theQuiz.setQuestion)
  }

  return (
    <div>
      <button onClick={createTheQuiz}>Create Quiz</button>
    </div>
  );
}

export default CreateQuizButton;