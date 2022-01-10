export const signUpUser = (username, password) => {
  return fetch('https://quizmaker-backend.herokuapp.com/signUp', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => {
      console.log('responseeee', response)
      response.json()
    }) 
}