import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';



const Quiz = () => {

  const theQuizID = useSelector(state => state.setQuizID)

  const [theQuiz, setTheQuiz] = useState(null)

  useEffect(() => {
    theQuizID &&
      fetch(`http://localhost:3001/quiz/${theQuizID}`)
        .then(response => response.json())
        .then(data => {
          console.log('data', data)
          setTheQuiz(data.data)
        })


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