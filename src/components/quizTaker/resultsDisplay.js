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

  const result = quizResultsOptions.length ? quizResultsOptions.filter(option => option.letter === theResult[0]) : ''

  console.log('ggrrr', result)

  return ( 
    <div>
      {
        // result[0] && result[0].text
        result[0] && result.map(aResult => aResult.text)
      }
    </div>
   );
}
 
export default ResultsDisplay;