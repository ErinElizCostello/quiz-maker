import React from 'react';
import BackButton from './backButton';
import { deleteAUserAccount } from '../API/deleteAUserAccount';

const DeleteUserAccount = () => {

  const theUser = localStorage.getItem("QuizUser") && JSON.parse(localStorage.getItem("QuizUser")).payload.user

  const deleteAccount = () => deleteAUserAccount(theUser)

  return ( 
    <div>
      <BackButton backTo="home" />
      
      <button onClick={deleteAccount}>delete my account</button>
    </div>
   );
}
 
export default DeleteUserAccount;