export const deleteAQuiz = id => {
  return fetch('http://quizmaker-backend.herokuapp.com/deleteQuiz/${id}', {
    method: 'DELETE',
  })
    .then(response => response.json())
}