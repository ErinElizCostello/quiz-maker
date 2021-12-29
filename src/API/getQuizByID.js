export const getQuizByID = id => {
  return fetch('https://quizmaker-backend.herokuapp.com/quiz/${id}')
    .then(response => response.json())
}