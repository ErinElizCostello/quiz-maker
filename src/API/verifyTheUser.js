export const verifyTheUser = (token) => {
  return fetch(`http://localhost:3001/verify/${token}`)
    .then(response => {
      if (response.ok === false) {
        localStorage.removeItem('QuizUser')
      }
      console.log(response)
    });
}