import React from 'react';
import { deleteAQuiz } from '../../API/deleteAQuiz';



const AreYouSureYouWantToDeleteThisQuiz = (props) => {

  const cancel = () => props.quizInfo.setAreYouSureMessage(false)

  const deleteTheQuiz = () => {
    console.log(props.quizInfo.deleteQuizId)
    return deleteAQuiz(props.quizInfo.deleteQuizId)
      .then(data => {
        console.log(data)
        window.location.reload()
      })
  }

  return (
    <div style={{ height: 100, width: 300, backgroundColor: 'red' }}>
      <div>
        <button onClick={cancel}>X</button>
      </div>
      <div >
        {`Are you sure bitch?? That you want to delete ${props.quizInfo.deleteQuizTitle}`}
      </div>
      <div>
        <button
          onClick={deleteTheQuiz}
        >
          yes delete this quiz
        </button>
      </div>
    </div>
  );
}

export default AreYouSureYouWantToDeleteThisQuiz;