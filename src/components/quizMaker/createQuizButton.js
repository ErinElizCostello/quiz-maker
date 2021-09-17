import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { createAQuiz } from '../../API/createAQuiz';


const CreateQuizButton = () => {

  let theQuiz = useSelector(state => state)

  const createTheQuiz = () => {
    console.log('theQuiz', theQuiz)
    createAQuiz(theQuiz).then(data => console.log('hello??'))
    return fetch('http://localhost:3001/createQuiz', {
      method: 'POST',
      body: JSON.stringify({
        // id: "7",
        user: "erin",
        // time: 8,
        quiz: theQuiz
        // user_id: userID,
        // recipe_id_api: APIrecipeID
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => console.log('data', data))
  }

  return (
    <div>
      <button onClick={createTheQuiz}>Create Quiz</button>
    </div>
  );
}

export default CreateQuizButton;