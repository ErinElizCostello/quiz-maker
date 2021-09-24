export const getQuizByID = id => {
  return fetch(`http://localhost:3001/quiz/${id}`)
    .then(response => response.json())
}