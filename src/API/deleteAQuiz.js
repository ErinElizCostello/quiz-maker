export const deleteAQuiz = id => {
  return fetch(`https://quizmaker-backend.herokuapp.com/deleteQuiz/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
}