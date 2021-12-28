export const getAllUsers = () => {
  return fetch('https://quiz-maker-5000-backend.herokuapp.com/getAllUsers')
    .then(response => response.json())
}