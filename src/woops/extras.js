const dispatch = useDispatch()

  const numberOfAnswers = useSelector(state => state.setHowManyAnswers)

  let num = 0

  const [questionText, setQuestionText] = useState('')
  const [answerText, setAnswerText] = useState({})

  const [answers, setAnswers] = useState([])
  const [quizQuestions, setQuizQuestions] = useState([])

  
  

 let templateArray
 const template = {}

  const onChangeNumberOfAnswers = (event) => {
    num = 0

    dispatch(setHowManyAnswers(event.target.value))
   
    templateArray = Array.apply(null, { length: event.target.value }).map(el => 
      ({
        letter: letters[num += 1],
        answer: ''
      }))

    console.log('templateArray', templateArray)

    createTemplate(templateArray)
    
    setAnswerText(template)
  }

  const createTemplate = (templateArray) => {
    const len = templateArray.length
    console.log('length', templateArray.length)
    for (let i = 1; i < len; i++) {
      template[letters[i]] = templateArray[i].answer
    }

console.log('template', template)
    setAnswerText(template)
  
  }

  console.log('template', template)

  const onChangeAnswerText = (letter, event) => {
    
    setAnswerText (template[letter] = event.target.value)
    // console.log('temp', template)
    // console.log('event', event.target.value)
    // setAnswerText({ letter, answer: event.target.value })

    console.log('answerText', answerText)

  }


  const onChangeQuestionText = (event) => {
    setQuestionText(event.target.value)
  }

  

  const addAnAnswer = () => {
    setAnswers([...answers, answerText])
  }

  const onSubmit = () => {
    // setQuizQuestions([...quizQuestions, { questionText, answers }])
    console.log(questionText)
    console.log(answers)
  }

  const numberOfAnswersOptions = ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  const letters = { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'd', 7: 'e', 8: 'f', 9: 'g', 10: 'h', 11: 'i', 12: 'j' }

  return (
    <div>

      <label for="numberOfAnswers">How many answers will your questions have?</label>

      <select id="numberOfAnswers" onChange={number => onChangeNumberOfAnswers(number)}>
        {numberOfAnswersOptions.map(number => <option value={number}>{number}</option>)}
      </select>

      <br />



      <label for="question">What's your question?</label>

      <textarea id="question" name="question" rows="4" cols="40" onChange={event => onChangeQuestionText(event)}></textarea>

      <br />

      {/* <button>Add an answer</button> */}

      {
        Array.apply(null, { length: numberOfAnswers }).map(el => 
          
            (
              
            <div>
              <label for="question">answer</label>

              <textarea id="option" name="option" rows="2" cols="40" onChange={
                event => onChangeAnswerText(event)
                // onChangeAnswerText(letters[num += 1], event)
                // event => template[letters[num += 1]] = event.target.value
              }></textarea>
              <button onChange={() => addAnAnswer()}>add</button>
            </div>
            )
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

  // const [answers1, setAnswers1] = useState('')
//   const [answers2, setAnswers2] = useState('')
//   const [answers3, setAnswers3] = useState('')
//   const [answers4, setAnswers4] = useState('')
//   const [answers5, setAnswers5] = useState('')
//   const [answers6, setAnswers6] = useState('')
//   const [answers7, setAnswers7] = useState('')
//   const [answers8, setAnswers8] = useState('')
//   const [answers9, setAnswers9] = useState('')
//   const [answers10, setAnswers10] = useState('')
//   const [answers11, setAnswers11] = useState('')
//   const [answers12, setAnswers12] = useState('')





// fetch('http://localhost:3001/createQuiz', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     user: "erin",
    //     quiz: theQuiz.setQuestion[0]
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   }
    // })
    //   .then(response => response.json())
    //   .then(data => console.log('data', data))