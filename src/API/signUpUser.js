export const signUpUser = (username, password) => {
  return fetch('http://quizmaker-backend.herokuapp.com/signUp', {
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