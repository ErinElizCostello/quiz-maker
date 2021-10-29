import React, { useState } from 'react';

import { deleteAUserAccount } from '../API/deleteAUserAccount';

import BackButton from './backButton';



const DeleteUserAccount = () => {

  const [accountDeletedMessage, setAccountDeletedMessage] = useState(false)

  const theUser = localStorage.getItem("QuizUser") && JSON.parse(localStorage.getItem("QuizUser")).payload.user

  const deleteAccount = () => {
    deleteAUserAccount(theUser)
      .then(data => {
        localStorage.getItem("QuizUser") && localStorage.removeItem("QuizUser")
        setAccountDeletedMessage(true)
      })
  }

  return (
    <div>
      <div>
        <BackButton backTo="home" />
      </div>
      <button onClick={deleteAccount}>
        delete my account
      </button>
      {accountDeletedMessage && `Your account has been successfully deleted`}
    </div>
  );
}

export default DeleteUserAccount;