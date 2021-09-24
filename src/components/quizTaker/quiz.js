import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getQuizByID } from '../../API/getQuizByID';



const Quiz = () => {

  const theQuizID = useSelector(state => state.setQuizID)

  const [theQuiz, setTheQuiz] = useState(null)

  useEffect(() => {
    theQuizID && getQuizByID(theQuizID)
    .then(quiz => setTheQuiz(quiz.data))
  }, []);

  return (
    <div>
      <div>
        {theQuiz && theQuiz.title}
      </div>
      <div>
        {theQuiz && theQuiz.quiz.map(thisQuiz => (
          <div style={{margin: 20}}>
            <div>
              {thisQuiz.question}
            </div>
            <div style={{margin: 10}}></div>
            <div>
              {thisQuiz.answers.map(answer => (
                <div>
                  {`${answer.letter}. ${answer.text}`}
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