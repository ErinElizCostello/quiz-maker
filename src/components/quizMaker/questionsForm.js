import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { setQuestion } from '../../state/actions/questions';

import BackButton from '../backButton';



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

  const possibleAnswerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']

  //only display a text area for each number of possible answers selected by the user
  const answerLetters = possibleAnswerLetters.slice(0, numberOfQuestions)

  return (
    <div>
      <div>
        <BackButton />
      </div>
      <div>
        <label>What is the question?</label><br />
        <textarea
          id="option"
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
              {letter}
            </label>
            <textarea
              id="option"
              value={answerText[letter]}
              name="option"
              rows="2"
              cols="40"
              onChange={event => onChangeAnswerText(letter, event)}
            />
          </div>
        ))
      }
      <div>
        {
          Object.keys(answerText).filter(answer => answerText[answer] !== '').length === numberOfResults ?
            <button onClick={addQuestion}>
              Add Question
            </button>
            :
            <button disabled>
              Add Question
            </button>
        }
      </div>
      {
        quizQuestions.length ?
          <Link to="/resultsForm">
            <div>
              <button>
                next...
              </button>
            </div>
          </Link>
          :
          <button disabled>
            next...
          </button>
      }
    </div>
  );
}

export default QuestionsForm;