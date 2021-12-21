import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { deleteQuestion } from '../../state/actions/questions';

import '../../styles/questionsDisplay.css'



const QuestionsDisplay = () => {

  const dispatch = useDispatch()

  const questions = useSelector(state => state.setQuestion)

  //for numbering the questions
  let questionNumber = 1

  const deleteTheQuestion = (questionId) => {
    const updatedListOfQuestions = questions.filter(question => question.id !== questionId)

    questionNumber = 1

    dispatch(deleteQuestion(updatedListOfQuestions))
  }

  return (
    <div className="questionsDisplay">
      <div>
        {
          questions.map(question => (
            <div className="aQuestion" key={question.id}>
              <div className="questionAndDeleteButton">
                <div>
                  {`${questionNumber++}. ${question.question}`}
                </div>
                <button className="xButton" onClick={() => deleteTheQuestion(question.id)}>
                  X
                </button>
              </div>
              <br /> <br />
              {
                question.answers.map(answer => (
                  <div>
                    {`${answer.letter}.  ${answer.text}`}
                  </div>
                ))
              }

              <br /><br />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default QuestionsDisplay;