export const deleteAUserAccount = (user) => {
  return fetch('https://quiz-maker-5000-backend.herokuapp.com/deleteUser/${user}', {
    method: 'DELETE',
  })
    .then(response => response.json())
}