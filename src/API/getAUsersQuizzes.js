export const getAUsersQuizzes = (username) => {
  return fetch('https://quiz-maker-5000-backend.herokuapp.com/myQuizzes', {
    method: 'POST',
    body: JSON.stringify({
      username,
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())
}