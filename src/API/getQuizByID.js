export const getQuizByID = id => {
  return fetch('http://quizmaker-backend.herokuapp.com/quiz/${id}')
    .then(response => response.json())
}