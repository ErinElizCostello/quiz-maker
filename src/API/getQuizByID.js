export const getQuizByID = id => {
  return fetch('https://quiz-maker-5000-backend.herokuapp.com/quiz/${id}')
    .then(response => response.json())
}