import React, { useState } from 'react';
import BackButton from './backButton';
import { deleteAUserAccount } from '../API/deleteAUserAccount';

const DeleteUserAccount = () => {

  const [accountDeletedMessage, setAccountDeletedMessage] = useState(false)

  const theUser = localStorage.getItem("QuizUser") && JSON.parse(localStorage.getItem("QuizUser")).payload.user

  const deleteAccount = () => {
    deleteAUserAccount(theUser)
      .then(data => {
        console.log(data)
        localStorage.getItem("QuizUser") && localStorage.removeItem("QuizUser")
        setAccountDeletedMessage(true)
      })
        
  }

  return ( 
    <div>
      <BackButton backTo="home" />
      
      <button onClick={deleteAccount}>delete my account</button>

      {accountDeletedMessage && `Your account has been successfully deleted`}
    </div>
   );
}
 
export default DeleteUserAccount;