import React, { useState } from 'react';
import { signUpUser } from '../../API/signUpUser';
import {Link, Redirect } from 'react-router-dom'
import BackButton from '../backButton'


const SignUp = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirectToLogin, setRedirectToLogin] = useState(false)

  const usernameText = event => setUsername(event.target.value)

  const passwordText = event => setPassword(event.target.value)

  const createNewAccount = () => {
    signUpUser(username, password)
    setRedirectToLogin(true)
  }

  return (
    <div>
      {redirectToLogin ? <Redirect to={{ pathname: '/login' }}></Redirect> : null}
      <BackButton backTo="home" />
      <div>
        <label>Username</label>
        <input onChange={usernameText}></input>
      </div>
      <div>
        <label>Password</label>
        <input onChange={passwordText}></input>
      </div>
      <div>
        <button onClick={createNewAccount}>Sign Up</button>
      </div>
      <Link to='/login'>
        <div>
          Login!
        </div>
      </Link>
    </div>
  );
}

export default SignUp;