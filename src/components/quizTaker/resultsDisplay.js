import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getQuizByID } from '../../API/getQuizByID';


const ResultsDisplay = () => {

  const theResult = useSelector(state => state.setResultOfQuizTaken)
  const theQuizID = useSelector(state => state.setQuizID)

  const [quizResultsOptions, setQuizResultsOptions] = useState([])

  useEffect(() => {
    theQuizID && getQuizByID(theQuizID)
      .then(quiz => {
        setQuizResultsOptions(quiz.data.results)
        console.log('quiz.data', quiz.data)
      })
  }, []);

  const result = []
  
  quizResultsOptions.length && quizResultsOptions.forEach(option =>
    theResult.length && theResult.forEach(letter => 
      option.letter === letter && result.push(option.text)
    )
  )


  //^^^this is why its not showing ties

  console.log('ggrrr', result)

  return (
    <div>
      {
        result.length > 1 && `It's a tie!` 
      }
      <br /><br />
      {
        result.length > 1 ?
        result.map(aResult => 
          (
            <div>{aResult}<br /></div>
          )
        )
        : result[0]
      }
    </div>
  );
}

export default ResultsDisplay;