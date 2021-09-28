import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getQuizByID } from '../../API/getQuizByID';



const Quiz = () => {

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
 
  return (
    <div>
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
    </div>
  );
}

export default Quiz;