export const deleteAUserAccount = (user) => {
  return fetch('http://quizmaker-backend.herokuapp.com/deleteUser/${user}', {
    method: 'DELETE',
  })
    .then(response => response.json())
}