import React, { useState } from 'react';
import { loginUser } from '../../API/loginUser';
import {Link, Redirect } from 'react-router-dom'
import BackButton from '../backButton'



const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirectToHomePage, setRedirectToHomePage] = useState(false)

  const usernameText = event => setUsername(event.target.value)

  const passwordText = event => setPassword(event.target.value)

  const loginTheUser = () => {
    loginUser(username, password)
      .then(data => {
        if (data.success !== false) {
          localStorage.setItem('QuizUser', JSON.stringify(data))
          setRedirectToHomePage(true)
        }
        console.log('data', data)
      })
  }

  return (
    <div>
      {redirectToHomePage ? <Redirect to={{ pathname: '/' }}></Redirect> : null}
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