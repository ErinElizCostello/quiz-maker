export const deleteAQuiz = id => {
  return fetch(`http://localhost:3001/deleteQuiz/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
}