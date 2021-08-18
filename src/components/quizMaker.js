import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setHowManyAnswers } from '../state/actions/setHowManyAnswers';


const QuizMaker = () => {

  const dispatch = useDispatch()

  const numberOfAnswers = useSelector(state => state.setHowManyAnswers)

  const [questionText, setQuestionText] = useState('')
  const [answerText, setAnswerText] = useState('')
  const [answers, setAnswers] = useState([])
  const [quizQuestions, setQuizQuestions] = useState([])

  const onChangeNumberOfAnswers = (event) =>  dispatch(setHowManyAnswers(event.target.value))

  const onChangeQuestionText = (event) => {
    setQuestionText(event.target.value)
  }

  const onChangeAnswerText = (event) => {
    setAnswerText(event.target.value)
    
  }

  const addAnAnswer = () => {
    setAnswers([...answers, answerText])
  }

  const onSubmit = () => {
    // setQuizQuestions([...quizQuestions, { questionText, answers }])
    console.log(questionText)
    console.log(answers)
  }

const options = ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

  return (
    <div>
     
        <label for="numberOfAnswers">How many answers will your questions have?</label>

        <select id="numberOfAnswers" onChange={event => onChangeNumberOfAnswers(event)}>
          {options.map(option =>  <option value={option}>{option}</option>)}
        </select>

        <br />

     
        <label for="question">What's your question?</label>

        <textarea id="question" name="question" rows="4" cols="40" onChange={event => onChangeQuestionText(event)}></textarea>

        <br />

        {
          Array.apply(null, { length: numberOfAnswers }).map(el =>
            <div>
              <label for="question">Add an Answer</label>

              <textarea id="option" name="option" rows="2" cols="40" onChange={event => onChangeAnswerText(event)}></textarea>
              <button onChange={() => addAnAnswer()}>add</button>
            </div>
          )
        }
        <br />
        <button onClick={onSubmit}>Add Question</button>

      

      <div>
        {
        
        quizQuestions.map(question => {
          <div>
            <p>
              {question.questionText}
            </p>
            <p>
              {question.answers.map(answer => <p>{answer}</p>)}
            </p>
          </div>
        })}
      </div>
    </div>
  );
}

export default QuizMaker;