export const signUpUser = (username, password) => {
  return fetch('https://quizmaker-backend.herokuapp.com/signUp', {
    method: 'POST',
    mode: 'cors',
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