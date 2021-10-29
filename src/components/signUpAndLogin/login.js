import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom'
import '../../styles/login.css'

import { loginUser } from '../../API/loginUser';

import BackButton from '../backButton'



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
    <div className="background">
      {redirectToHomePage && <Redirect to={{ pathname: '/' }} />}

      <div className="everything">
        <div className="backButton">
          <BackButton backTo="home" />
        </div>

        <div className="formAndSignUpLink">
        <p className="title">Login</p>
          <div>
            {userDoesNotExistMessage && <p>user does not exist</p>}
            {wrongPasswordMessage && <p>wrong password!</p>}
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
          <div>
            <button onClick={loginTheUser}>
              Login
            </button>
          </div>
          <Link className="link" to='/signUp'>
            <p className="signUpLink">
              sign up!
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;