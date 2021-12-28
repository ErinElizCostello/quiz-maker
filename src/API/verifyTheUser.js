export const verifyTheUser = (token) => {
  return fetch('https://quiz-maker-5000-backend.herokuapp.com/verify/${token}')
    .then(res => res.json())
    .then(response => {
      if (response.err) {
        localStorage.removeItem('QuizUser')
      }
    });
}