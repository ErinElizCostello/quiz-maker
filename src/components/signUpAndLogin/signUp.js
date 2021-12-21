import React, { useState } from 'react';

import { Link, Redirect } from 'react-router-dom'

import { signUpUser } from '../../API/signUpUser';

import BackButton from '../backButton'

import '../../styles/signUp.css'



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
    <div className="background-signUp">
      {redirectToLogin && <Redirect to={{ pathname: '/login' }} />}
      <div className="everything-signUp">
        <div className="backButton">
          <BackButton />
        </div>
        <div className="spacer-signUp"></div>

        <div className="formAndLoginLink">
          {
            usernameAlreadyExistsMessage &&
            <p className="usernameAlreadyExists">
              username already exists, pick another one
            </p>
          }
          <div>
            <label
              for="signUp-input"
              className="label-signUp"
            >
              <span className="label-display">
                <p>user</p>
                <p className="blue-signUp">n</p>
                <p className="green-signUp">a</p>
                <p className="yellow-signUp">m</p>
                <p className="pink-signUp">e</p>
              </span>
            </label>
            <input
              id="signUp-input"
              className="input-signUp"
              onChange={usernameText}
            />
          </div>
          <div>
            <label
              for="password-input"
              className="label-signUp"
            >
              <span className="label-display">
                <p>pass</p>
                <p className="blue-signUp">w</p>
                <p className="green-signUp">o</p>
                <p className="yellow-signUp">r</p>
                <p className="pink-signUp">d</p>
              </span>
            </label>
            <input
              id="password-input"
              className="input-signUp"
              onChange={passwordText}
            />
          </div>
          <br />
          <div>
            <button
              className="signUp-button"
              onClick={createNewAccount}
            >
              Sign Up
            </button>
          </div>
          <Link
            className="link"
            to='/login'
          >
            <p className="loginLink">
              Already have an account? Login here
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;