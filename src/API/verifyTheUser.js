export const verifyTheUser = (token) => {
  return fetch(`http://localhost:3001/verify/${token}`)
    .then(res => res.json())
    .then(response => {
      if (response.err) {
        localStorage.removeItem('QuizUser')
      }
    });
}