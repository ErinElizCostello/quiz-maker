import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom'

import { loginUser } from '../../API/loginUser';

import BackButton from '../backButton'

import '../../styles/login.css'



const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [userDoesNotExistMessage, setUserDoesNotExistMessage] = useState(false)
  const [wrongPasswordMessage, setWrongPasswordMessage] = useState(false)
  const [redirectToHomePage, setRedirectToHomePage] = useState(false)

  const usernameText = event => setUsername(event.target.value)

  const passwordText = event => setPassword(event.target.value)

  const loginTheUser = () => {
    loginUser(username, password)
      .then(data => {
        if (data.error === "user does not exist") {
          setUserDoesNotExistMessage(true)
          setWrongPasswordMessage(false)
        }
        if (data.message === "passwords do not match") {
          setWrongPasswordMessage(true)
          setUserDoesNotExistMessage(false)
        }
        if (data.success !== false) {
          localStorage.setItem('QuizUser', JSON.stringify(data))
          setRedirectToHomePage(true)
        }
      })
  }

  return (
    <div className="background-login">
      {redirectToHomePage && <Redirect to={{ pathname: '/' }} />}
      <div className="everything-login">
        <div className="backButton-login">
          <BackButton />
        </div>
        <div className="spacer-login"></div>
        <div className="formAndSignUpLink">
          <div>
            {userDoesNotExistMessage && <p className="userDoesNotExist">user does not exist</p>}
            {wrongPasswordMessage && <p className="wrongPassword">wrong password!</p>}
            <label for="login-input" className="label-login">
              <span className="label-display">
                <p>user</p>
                <p className="blue-login">n</p>
                <p className="green-login">a</p>
                <p className="yellow-login">m</p>
                <p className="pink-login">e</p>
              </span>
            </label>
            <input id="login-input" className="input-login" onChange={usernameText} />
          </div>
          <div>
            <label for="password-input" className="label-login">
              <span className="label-display">
                <p>pass</p>
                <p className="blue-login">w</p>
                <p className="green-login">o</p>
                <p className="yellow-login">r</p>
                <p className="pink-login">d</p>
              </span>
            </label>
            <input id="password-input" className="input-login" onChange={passwordText} />
          </div>
          <div>
            <button className="login-button" onClick={loginTheUser}>
              login
            </button>
          </div>
          <Link className="link" to='/signUp'>
            <p className="signUpLink">
              Don't have an account? Sign up here
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;