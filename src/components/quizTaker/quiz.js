import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuizByID } from '../../API/getQuizByID';
import { setResultOfQuizTaken } from '../../state/actions/resultOfQuizTaken';
import BackButton from '../backButton';
import ResultsDisplay from './resultsDisplay';


const Quiz = () => {

  const dispatch = useDispatch()

  const theQuizID = useSelector(state => state.setQuizID)

  const [theQuiz, setTheQuiz] = useState(null)
  const [selection, setSelection] = useState([])

  useEffect(() => {
    
    theQuizID && getQuizByID(theQuizID)
      .then(quiz => setTheQuiz(quiz.data))
  }, []);


  console.log('selection', selection)

  const onChangeAnswer = event => {
    let letter = event.target.value
    setSelection([...selection, letter])
    console.log('selection', selection)
  }

  const calculateResults = () => {
    let numberOfLetters = {}

    selection.forEach(letter => numberOfLetters[letter] ? numberOfLetters[letter]++ : numberOfLetters[letter] = 1)

    const sortedValues = Object.values(numberOfLetters).sort(function (a, b) {
      return b - a
    })
    // .reverse()

    const thatResult = []

    Object.keys(numberOfLetters).forEach(letter => numberOfLetters[letter] === sortedValues[0] && thatResult.push(letter))

    // const quizResult = selection.filter(letter => sortedValues[-1] === numberOfLetters[letter])
    dispatch(setResultOfQuizTaken(thatResult))


    console.log('sortedValues', sortedValues)
    console.log('thatResult', thatResult)

    console.log('numberOfLetters', numberOfLetters)
    console.log('datQUIZZZ', theQuiz)
  }

  return (
    <div>
      <BackButton backTo="home" />
      <div>
        {theQuiz && theQuiz.title}
      </div>
      <div>
        {theQuiz && theQuiz.quiz.map(thisQuiz => (
          <div style={{ margin: 20 }}>
            <div>
              {thisQuiz.question}
            </div>
            <div style={{ margin: 10 }}></div>
            <div
            // onChange={answer => onChangeAnswer(answer)}
            >
              {thisQuiz.answers.map(answer => (
                <div>
                  <input
                    type="radio"
                    id="radioBtn"
                    name={thisQuiz.question}
                    value={answer.letter}
                    onChange={answer => onChangeAnswer(answer)}
                  />
                  <label for="radioBtn">{`  ${answer.text}`}</label>
                  {/* ${answer.letter}. */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div onClick={calculateResults}>
        <button>See my results</button>
      </div>
      {/* <ResultsDisplay /> */}
    </div>
  );
}

export default Quiz;