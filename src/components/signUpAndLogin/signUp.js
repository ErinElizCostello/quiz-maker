import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom'
import '../../styles/signUp.css'

import { signUpUser } from '../../API/signUpUser';

import BackButton from '../backButton'



const SignUp = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [usernameAlreadyExistsMessage, setUsernameAlreadyExistsMessage] = useState(false)
  const [redirectToLogin, setRedirectToLogin] = useState(false)

  const usernameText = event => setUsername(event.target.value)

  const passwordText = event => setPassword(event.target.value)

  const createNewAccount = () => {
    signUpUser(username, password)
      .then(data => {
        data.error === 'username is already taken, pick a new one' ?
          setUsernameAlreadyExistsMessage(true)
          :
          setRedirectToLogin(true)
      })
  }

  return (
    <div className="background">
      {redirectToLogin && <Redirect to={{ pathname: '/login' }} />}
      <div className="everything">
        <div className="backButton">
          <BackButton />
        </div>
        
        <div className="formAndLoginLink">
          <p className="title">Sign Up</p>
        {
            usernameAlreadyExistsMessage &&
            <p>
              username already exists, pick another one
            </p>
          }
          <div>
          <label className="label">
            Username
          </label>
          <br />
          <input className="input" onChange={usernameText} />
          </div>

          <div>
            <label className="label">
              Password
            </label>
            <br />
            <input className="input" onChange={passwordText} />
          </div>
          <br />
          <div>
            <button onClick={createNewAccount}>
              Sign Up
            </button>
          </div>
          <Link className="link" to='/login'>
            <p className="loginLink">
              Login!
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;