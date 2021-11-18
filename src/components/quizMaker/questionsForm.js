import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { setQuestion } from '../../state/actions/questions';
import { clearResults } from '../../state/actions/results';

import BackButton from '../backButton';

import '../../styles/questionsForm.css'


const QuestionsForm = () => {

  const dispatch = useDispatch()

  const [questionText, setQuestionText] = useState('')
  const [answerText, setAnswerText] = useState({ a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '', i: '', j: '', k: '', l: '' })

  const quizQuestions = useSelector(state => state.setQuestion)
  const numberOfQuestions = useSelector(state => state.setNumberOfAnswers)
  const numberOfResults = useSelector(state => state.setNumberOfAnswers)

  const onChangeQuestionText = event => setQuestionText(event.target.value)

  const onChangeAnswerText = (letter, event) => setAnswerText({ ...answerText, [letter]: event.target.value })

  const addQuestion = () => {
    const answers = []

    //so that empty letters from answerText dont get dispatched
    Object.keys(answerText).forEach(letter => answerText[letter] &&
      answers.push({ letter: letter, text: answerText[letter] })
    )

    dispatch(setQuestion({
      id: Math.random(),
      question: questionText,
      answers
    }))

    setQuestionText('')

    setAnswerText({ a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '', i: '', j: '', k: '', l: '' })
  }

  const clearFormerResults = () => dispatch(clearResults([]))

  const possibleAnswerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']

  //only display a text area for each number of possible answers selected by the user
  const answerLetters = possibleAnswerLetters.slice(0, numberOfQuestions)

  return (
    <div className="questionsFormText">
      {/* <div className="spacerTopQuestionsForm"></div> */}
      <div className="questionsFormBox">
        <div>
          <div className="labelQuestion">
          <label >What is the question?</label><br />
          </div>
          <textarea
            id="option"
            className="textAreaQuestion"
            value={questionText}
            name="option"
            rows="2"
            cols="40"
            onChange={question => onChangeQuestionText(question)}
          />
        </div>
        {
          answerLetters.map(letter => (
            <div key={letter}>
              <label>
                {`${letter}.  `}
              </label>
              <textarea
                id="option"
                className="textAreaAnswer"
                value={answerText[letter]}
                name="option"
                rows="1"
                cols="40"
                onChange={event => onChangeAnswerText(letter, event)}
              />
            </div>
          ))
        }
        <div>
          {
            Object.keys(answerText).filter(answer => answerText[answer] !== '').length === numberOfResults ?
              <button id="non-disabled-button-add-question" onClick={addQuestion}>
                Add Question
              </button>
              :
              <button id="disabled-button-add-question" disabled>
                Add Question
              </button>
          }
        </div>
      </div>
      <div className="spacerBottomQuestionsForm"></div>
      {
        quizQuestions.length ?
          <Link to="/resultsForm" onClick={clearFormerResults}>
            <div>
              <button id="non-disabled-button-next">
                next...
              </button>
            </div>
          </Link>
          :
          <button id="disabled-button-next" disabled>
            next...
          </button>
      }
    </div>
  );
}

export default QuestionsForm;