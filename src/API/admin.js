export const getAllUsers = () => {
  return fetch('http://quizmaker-backend.herokuapp.com/getAllUsers')
    .then(response => response.json())
}