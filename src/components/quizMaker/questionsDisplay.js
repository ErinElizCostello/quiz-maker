import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteQuestion } from '../../state/actions/questions';



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
    <div>
      {
        questions.map(question => (
          <div key={question.id}>
            <div>
              {`${questionNumber++}. ${question.question}`}
            </div>
            <br /> <br />
            {
              question.answers.map(answer => (
                <div>
                  {`${answer.letter}.  ${answer.text}`}
                </div>
              ))
            }
            <button onClick={() => deleteTheQuestion(question.id)}>
              X
            </button>
            <br /><br />
          </div>
        ))
      }
    </div>
  );
}

export default QuestionsDisplay;