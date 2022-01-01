export const verifyTheUser = (token) => {
  return fetch(`https://quizmaker-backend.herokuapp.com/verify/${token}`)
    .then(res => res.json())
    .then(response => {
      if (response.err) {
        localStorage.removeItem('QuizUser')
      }
    });
}