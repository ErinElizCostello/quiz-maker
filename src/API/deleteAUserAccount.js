export const deleteAUserAccount = (user) => {
  return fetch(`https://quizmaker-backend.herokuapp.com/deleteUser/${user}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
}