import React from 'react';
import { deleteAQuiz } from '../../API/deleteAQuiz';
import "../../styles/areYouSureYouWantToDeleteThisQuiz.css"


const AreYouSureYouWantToDeleteThisQuiz = (props) => {

  const cancel = () => props.quizInfo.setAreYouSureMessage(false)

  const deleteTheQuiz = async () => {
    await deleteAQuiz(props.quizInfo.deleteQuizId);
    window.location.reload();
  }

  return (
    <div className="background">
      <div>
        <button id="x-button" onClick={cancel}>
          X
        </button>
      </div>
      <div id="text-areYouSure">
        <div>
          {
            `CAREFUL`
          }
        </div>
        <br />
        <div>
          {
            `you are about to delete the quiz:`
          }
        </div>
        <br />
        <div id="quizTitle-areYouSure">
          {
            `${props.quizInfo.deleteQuizTitle}`
          }
        </div>
      </div>
      <div id="buttonSpacer-areYouSure"></div>
      <div id="buttonLayout-areYouSure">
        <button id="button-deleteQuiz" onClick={deleteTheQuiz}>
          yes delete this quiz
        </button>
      </div>
    </div>
  );
}

export default AreYouSureYouWantToDeleteThisQuiz;