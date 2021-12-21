export const getAllUsers = () => {
  return fetch('http://localhost:3001/getAllUsers')
    .then(response => response.json())
}