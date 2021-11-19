import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getQuizByID } from '../../API/getQuizByID';

import '../../styles/resultsDisplay.css'


const ResultsDisplay = () => {

  const theResult = useSelector(state => state.setResultOfQuizTaken)
  const theQuizID = useSelector(state => state.setQuizID)

  const [quizResultsOptions, setQuizResultsOptions] = useState([])

  useEffect(() => {
    setQuizResultsOptions([])
    theQuizID && getQuizByID(theQuizID)
      .then(quiz => {
        setQuizResultsOptions(quiz.data.results)
      })
  }, []);

  const result = []
  
  quizResultsOptions.length && quizResultsOptions.forEach(option =>
    theResult.length && theResult.forEach(letter => 
      option.letter === letter && result.push(option.text)
    )
  )

  return (
    <div className={result.length && "resultsModal"}>
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
        : <div className="theResult"> {result[0]} </div>
      }
    </div>
  );
}

export default ResultsDisplay;