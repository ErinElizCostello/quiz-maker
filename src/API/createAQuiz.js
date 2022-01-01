export const createAQuiz = (title, quiz, user, results) => {
  return fetch('http://quizmaker-backend.herokuapp.com/createQuiz', {
    method: 'POST',
    body: JSON.stringify({
      user: user,
      title: title,
      quiz: quiz,
      results: results
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())
}