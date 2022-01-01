export const loginUser = (username, password) => {
  return fetch('http://quizmaker-backend.herokuapp.com/login', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())   
}