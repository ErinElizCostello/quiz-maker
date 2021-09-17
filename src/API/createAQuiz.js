export const createAQuiz = (quiz) => {
  return fetch('http://localhost:3001/createQuiz', {
    method: 'POST',
    body: JSON.stringify({
      // id: "8",
      user: "erin",
      // time: 11,
      quiz: JSON.stringify(quiz),
      // user_id: userID,
      // recipe_id_api: APIrecipeID
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())
}