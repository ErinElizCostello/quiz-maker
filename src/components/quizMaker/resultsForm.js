import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setResults } from '../../state/actions/results';
import CreateQuizButton from './createQuizButton';
import BackButton from '../backButton'
import { Link } from 'react-router-dom';


const ResultsForm = () => {
  const dispatch = useDispatch()

  const displayResults = useSelector(state => state.setResults)
  const numberOfResults = useSelector(state => state.setNumberOfAnswers)

  const [resultsText, setResultsText] = useState({ a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '', i: '', j: '', k: '', l: '' })
  const [showCreateQuizButton, setShowCreateQuizButton] = useState(false)

  const onChangeResultsText = (letter, event) => setResultsText({ ...resultsText, [letter]: event.target.value })

  const addResults = () => {
    const theResults = []
    
    Object.keys(resultsText).forEach(letter => resultsText[letter] &&
        theResults.push({letter: letter, text: resultsText[letter]})
        )
    // Object.keys(answerText).forEach(letter => answerText[letter] &&
    //   answers.push({letter: letter, text: answerText[letter]})
    //   )
    // dispatch(setQuestion({id: Math.random(), title: titleText, question: questionText, answers}))
    console.log('resultzz', theResults)
    dispatch(setResults(theResults))
    setShowCreateQuizButton(true)
  }

  const possibleResultsLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']

  const resultsLetters = possibleResultsLetters.slice(0, numberOfResults)

  return (
    <div>
      <BackButton backTo="questionsForm" />
      {
        resultsLetters.map(letter => (
          <div key={letter}>
            <label>{`If the quiz taker gets mostly ${letter.toUpperCase()}s...`}</label>
            <textarea id="option" name="option" rows="5" cols="40" onChange={
              event => onChangeResultsText(letter, event)}>
            </textarea>
          </div>
        ))
      }
      
        {/* {
          displayResults.length ? `Edit Results` : 'Preview Results'
        } */}
        {
          displayResults.length ? <button onClick={addResults} >Edit Results</button>
          :
          Object.keys(resultsText).filter(result => resultsText[result] !== '').length === numberOfResults ?
          // <Link to="/previewResults">
      <button onClick={addResults}>
        
        Preview Results
        </button>
        // </Link>
        
        :
        <button disabled>Preview Results</button>
}

      <div>
        {
          displayResults.map(result => (
           <div>
             {
             `mostly ${result.letter}'s ...`
             }
             <br />
             {
               result.text
             }
             
             <br /><br /><br />
           </div>
          ))
        }
      </div>
{
  showCreateQuizButton &&
  <CreateQuizButton />
}
    
    </div>
  );
}

export default ResultsForm;