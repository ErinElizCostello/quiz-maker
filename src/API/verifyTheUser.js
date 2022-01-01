export const verifyTheUser = (token) => {
  return fetch('http://quizmaker-backend.herokuapp.com/verify/${token}')
    .then(res => res.json())
    .then(response => {
      if (response.err) {
        localStorage.removeItem('QuizUser')
      }
    });
}