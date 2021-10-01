export const deleteAUserAccount = (user) => {
  return fetch(`http://localhost:3001/deleteUser/${user}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
}