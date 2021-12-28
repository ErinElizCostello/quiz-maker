export const deleteAQuiz = id => {
  return fetch('https://quiz-maker-5000-backend.herokuapp.com/deleteQuiz/${id}', {
    method: 'DELETE',
  })
    .then(response => response.json())
}