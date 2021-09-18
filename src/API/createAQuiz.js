export const createAQuiz = (title, quiz) => {
  return fetch('http://localhost:3001/createQuiz', {
    method: 'POST',
    body: JSON.stringify({
      user: "erin",
      title: title,
      quiz: quiz
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())
    .then(data => console.log('data', data))
}