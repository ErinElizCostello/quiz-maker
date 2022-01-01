export const getAllUsers = () => {
  return fetch('https://quizmaker-backend.herokuapp.com/getAllUsers')
    .then(response => response.json())
}