import React, { useState } from 'react';
import { loginUser } from '../../API/loginUser';
import { Link, Redirect } from 'react-router-dom'
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
        console.log('data', data)
      })
  }

  return (
    <div>
      {redirectToHomePage && <Redirect to={{ pathname: '/' }}></Redirect>}
      <BackButton backTo="home" />
      <div>
        {userDoesNotExistMessage && <p>user does not exist</p>}
        {wrongPasswordMessage && <p>wrong password!</p>}
        <label>Username</label>
        <input onChange={usernameText}></input>
      </div>
      <div>
        <label>Password</label>
        <input onChange={passwordText}></input>
      </div>
      <div>
        <button onClick={loginTheUser}>Login</button>
      </div>
      <Link to='/signUp'>
        <div>
          sign up!
        </div>
      </Link>
    </div>
  );
}

export default Login;