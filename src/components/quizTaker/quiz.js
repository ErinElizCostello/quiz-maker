import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getQuizByID } from '../../API/getQuizByID';

import { setResultOfQuizTaken } from '../../state/actions/resultOfQuizTaken';

import BackButton from '../backButton';

import '../../styles/quiz.css'



const Quiz = () => {

  const dispatch = useDispatch()

  const theQuizID = useSelector(state => state.setQuizID)

  const [theQuiz, setTheQuiz] = useState(null)
  const [selection, setSelection] = useState({})
  const [disabledButton, setDisabledButton] = useState(true)

  let quizLength = theQuiz && theQuiz.quiz.length

  useEffect(() => {
    theQuizID && getQuizByID(theQuizID)
      .then(quiz => setTheQuiz(quiz.data))
  }, []);

  const onChangeAnswer = async (event, id) => {
    let letter = event.target.value
    let selectionCopy = selection

    selectionCopy[id] = letter

    setSelection(selectionCopy)

    quizLength === Object.values(selection).length ? setDisabledButton(false) : setDisabledButton(true)
  }

  const calculateResults = () => {

    let letters = Object.values(selection)
    let numberOfLetters = {}

    letters.forEach(letter => numberOfLetters[letter] ? numberOfLetters[letter]++ : numberOfLetters[letter] = 1)

    const sortedValues = Object.values(numberOfLetters).sort(function (a, b) {
      return b - a
    })

    const thatResult = []

    Object.keys(numberOfLetters).forEach(letter => numberOfLetters[letter] === sortedValues[0] && thatResult.push(letter))

    dispatch(setResultOfQuizTaken(thatResult))
  }

  return (
    <div>
      <div>
        <BackButton />
      </div>
      <div className="quizTakerLayout">
        <div className="quizTitle">
          {theQuiz && theQuiz.title}
        </div>
        <div className="quizQuestions-spacing">
          {
            theQuiz && theQuiz.quiz.map(thisQuiz => (
              <div
                key={Math.random()}
                className="quizTakerQuestionAndRadioButtons"
              >
                <div className="theQuizQuestion">
                  {thisQuiz.question}
                </div>
                <div className="quizTakerQuestionSpacers"></div>
                <div className="quizTakerAnswers">
                  {thisQuiz.answers.map(answer => (
                    <div
                      key={Math.random()}
                      // className="radioButtonWithAnswer"
                    >
                      <input
                        type="radio"
                        id="radioBtn"
                        // className="radioButtonCircle"
                        name={thisQuiz.question}
                        value={answer.letter}
                        onChange={answer => onChangeAnswer(answer, thisQuiz.id)}
                      />
                      <div 
                      // className="radioButtonLabel"
                      >
                        <label for="radioBtn">
                          {`  ${answer.text}`}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          }
        </div>
        <div>
          {
            disabledButton ?
              <button disabled className="seeMyResultsButtonDisabled">
                See my results
              </button>
              :
              <button className="seeMyResultsButton" onClick={calculateResults}>
                See my results
              </button>
          }
        </div>
      </div>
    </div>
  );
}

export default Quiz;