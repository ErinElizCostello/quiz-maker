import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'

import { setResults } from '../../state/actions/results';

import { createAQuiz } from '../../API/createAQuiz';

import BackButton from '../backButton'

import '../../styles/resultsForm.css'



const ResultsForm = () => {

  const dispatch = useDispatch()

  const displayResults = useSelector(state => state.setResults)
  const numberOfResults = useSelector(state => state.setNumberOfAnswers)

  const [resultsText, setResultsText] = useState({ a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '', i: '', j: '', k: '', l: '' })
  const [showCreateQuizButton, setShowCreateQuizButton] = useState(false)
  const [redirectToHomePage, setRedirectToHomePage] = useState(false)

  const onChangeResultsText = (letter, event) => setResultsText({ ...resultsText, [letter]: event.target.value })

  const addResults = () => {
    const theResults = []

    Object.keys(resultsText).forEach(letter => resultsText[letter] &&
      theResults.push({ letter: letter, text: resultsText[letter] })
    )

    dispatch(setResults(theResults))
    setShowCreateQuizButton(true)
  }

  const possibleResultsLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']

  //only display a text area for each number of possible answers selected by the user
  const resultsLetters = possibleResultsLetters.slice(0, numberOfResults)

  const theUser = JSON.parse(localStorage.getItem('QuizUser')).payload.user

  let theQuiz = useSelector(state => state)

  const createTheQuiz = async () => {
    await createAQuiz(theQuiz.setQuizTitle, theQuiz.setQuestion, theUser, theQuiz.setResults)

    setRedirectToHomePage(true)
  }

  return (
    <div>
      <BackButton />
      <div className="resultsLayout">
        <div className="resultsFormLayout">
          <div className="resultsFormBox">
            {
              resultsLetters.map(letter => (
                <div key={letter}>
                  <label id="label-mostly-letter">
                    {`If the quiz taker gets mostly ${letter.toUpperCase()}s...`}
                  </label>
                  <textarea
                    id="option"
                    className="textAreaResult"
                    name="option"
                    rows="5"
                    cols="40"
                    onChange={event => onChangeResultsText(letter, event)}
                  />
                </div>
              ))
            }
            <div>
              {
                displayResults.length ?
                  <button className="previewQuizNonDisabledButton" onClick={addResults}>
                    Edit Results
                  </button>
                  :
                  //cannot preview results until all form areas are filled in
                  Object.keys(resultsText).filter(result => resultsText[result] !== '').length === numberOfResults ?
                    <button className="previewQuizNonDisabledButton" onClick={addResults}>
                      Preview Results
                    </button>
                    :
                    <button className="previewQuizDisabledButton" disabled>
                      Preview Results
                    </button>
              }
            </div>
          </div>
          <div>
            {
              showCreateQuizButton ?
                <div>
                  {
                    redirectToHomePage &&
                    <Redirect to={{ pathname: '/' }} />
                  }
                  <div>
                    <button className="createQuizNonDisabledButton" onClick={createTheQuiz}>
                      Create Quiz
                    </button>
                  </div>
                </div>
                :
                <div>
                  <button className="createQuizDisabledButton" disabled>
                    Create Quiz
                  </button>
                </div>
            }
          </div>
        </div>
        <div className="resultsDisplay">
          {
            displayResults.map(result => (
              <div>
                <div className="resultsDisplayMostlys">
                  {
                    `mostly ${result.letter}'s ...`
                  }
                </div>

                <br />
                <div className="resultsDisplayMostlys">
                  {
                    result.text
                  }
                </div>
                <br /><br /><br />
              </div>
            ))
          }
        </div>

      </div>
    </div>
  );
}

export default ResultsForm;