import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../API/admin'
import { deleteAUserAccount } from '../API/deleteAUserAccount'

const AdminPage = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    getAllUsers().then(users => {
      console.log(users)
      setUsers(users.data)
    })
  }, []);

  const deleteThisUser = (username) => {
    console.log('userToDelete', username)
    deleteAUserAccount(username).then(data => console.log(data))
  }

  return (
    <div>

      {
        <ul>
          {
            users && users.map(user =>
              <li>
                <div style={{ display: 'flex', flexDirection: 'row', margin: "15px" }}>
                  <div style={{ margin: "5px" }}>{user.username}</div>
                  <div style={{ margin: "5px" }}><button onClick={() => deleteThisUser(user.username)}>delete</button></div>
                </div>
              </li>
            )
          }
        </ul>
      }

    </div>
  );
}

export default AdminPage;