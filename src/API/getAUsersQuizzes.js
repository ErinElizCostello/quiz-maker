export const getAUsersQuizzes = (username) => {
  return fetch('http://localhost:3001/myQuizzes', {
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