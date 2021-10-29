import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getQuizByID } from '../../API/getQuizByID';

import { setResultOfQuizTaken } from '../../state/actions/resultOfQuizTaken';

import BackButton from '../backButton';



const Quiz = () => {

  const dispatch = useDispatch()

  const theQuizID = useSelector(state => state.setQuizID)

  const [theQuiz, setTheQuiz] = useState(null)
  const [selection, setSelection] = useState([])

  useEffect(() => {
    theQuizID && getQuizByID(theQuizID)
      .then(quiz => setTheQuiz(quiz.data))
  }, []);

  const onChangeAnswer = event => {
    let letter = event.target.value
    setSelection([...selection, letter])
  }

  const calculateResults = () => {
    let numberOfLetters = {}

    selection.forEach(letter => numberOfLetters[letter] ? numberOfLetters[letter]++ : numberOfLetters[letter] = 1)

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
        <BackButton backTo="home" />
      </div>
      <div>
        {theQuiz && theQuiz.title}
      </div>
      <div>
        {
          theQuiz && theQuiz.quiz.map(thisQuiz => (
            <div style={{ margin: 20 }}>
              <div>
                {thisQuiz.question}
              </div>
              <div style={{ margin: 10 }}></div>
              <div>
                {thisQuiz.answers.map(answer => (
                  <div>
                    <input
                      type="radio"
                      id="radioBtn"
                      name={thisQuiz.question}
                      value={answer.letter}
                      onChange={answer => onChangeAnswer(answer)}
                    />
                    <label for="radioBtn">
                      {`  ${answer.text}`}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))
        }
      </div>
      <div>
        <button onClick={calculateResults}>
          See my results
        </button>
      </div>
    </div>
  );
}

export default Quiz;