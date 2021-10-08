import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setResults } from '../../state/actions/results';
import CreateQuizButton from './createQuizButton';
import BackButton from '../backButton'


const ResultsForm = () => {
  const dispatch = useDispatch()

  const displayResults = useSelector(state => state.setResults)

  const [resultsText, setResultsText] = useState({ a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '', i: '', j: '', k: '', l: '' })

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
  }

  const resultsLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']

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
      <button onClick={addResults}>
        {
          displayResults.length ? `Edit Results` : 'Add Results'
        }
        
        </button>

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
  displayResults.length !== 0 &&
  <CreateQuizButton />
}
    
    </div>
  );
}

export default ResultsForm;