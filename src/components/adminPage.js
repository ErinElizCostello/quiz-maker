import React, { useState, useEffect } from 'react';

import { getAllUsers } from '../API/admin'
import { deleteAUserAccount } from '../API/deleteAUserAccount'

import '../styles/adminPage.css'



const AdminPage = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    getAllUsers().then(users => {
      setUsers(users.data)
    })
  }, []);

  const deleteThisUser = (username) => {
    deleteAUserAccount(username).then(data => console.log(data))
  }

  return (
    <div>
      {
        <ul>
          {
            users && users.map(user =>
              <li>
                <div className="display">
                  <div className="theMargin">
                    {user.username}
                  </div>
                  <div className="theMargin">
                    <button onClick={() => deleteThisUser(user.username)}
                    >
                      delete
                    </button>
                  </div>
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