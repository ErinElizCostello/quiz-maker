import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setHowManyAnswers } from '../../state/actions/setHowManyAnswers';
import { setQuestion } from '../../state/actions/questions';




const QuestionsForm = () => {
  
  const dispatch = useDispatch()

  const [questionText, setQuestionText] = useState('')
  const [answerText, setAnswerText] = useState({ a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '', i: '', j: '', k: '', l: '' })

  const onChangeQuestionText = event => setQuestionText(event.target.value)

  const onChangeAnswerText = (letter, event) => setAnswerText({ ...answerText, [letter]: event.target.value })

  const addQuestion = () => {
    

    const answers = []
    
    Object.keys(answerText).forEach(letter => answerText[letter] &&
      answers.push({letter: letter, text: answerText[letter]})
      )
    dispatch(setQuestion({id: Math.random(), question: questionText, answers}))
    
    // setQuestionText('')
    // setAnswerText({ a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '', i: '', j: '', k: '', l: '' })
  }

  const answerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']

  return (
    <div>
      <div>
        <label>What is the question?</label><br />
        <textarea id="option" name="option" rows="2" cols="40" onChange={
          question => onChangeQuestionText(question)}>
        </textarea>
      </div>

      {
        answerLetters.map(letter => (
          <div key={letter}>
            <label>{letter}</label>
            <textarea id="option" name="option" rows="2" cols="40" onChange={
              event => onChangeAnswerText(letter, event)}>
            </textarea>
          </div>
        ))
      }

      <div>
        <button onClick={addQuestion}>
          Add Question
        </button>
      </div>
    </div>
  );
}

export default QuestionsForm;