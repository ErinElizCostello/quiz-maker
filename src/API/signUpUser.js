export const signUpUser = (username, password) => {
  return fetch('https://quiz-maker-5000-backend.herokuapp.com/signUp', {
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