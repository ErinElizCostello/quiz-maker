export const signUpUser = (username, password) => {
  return fetch('http://localhost:3001/signUp', {
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