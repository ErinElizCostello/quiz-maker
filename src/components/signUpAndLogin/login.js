import React, { useState } from 'react';
import { loginUser } from '../../API/loginUser';


const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const usernameText = event => setUsername(event.target.value)

  const passwordText = event => setPassword(event.target.value)

  const loginTheUser = () => {
    loginUser(username, password)
      .then(data => {
        if(data.success !== false) {
        localStorage.setItem('QuizUser', JSON.stringify(data))
        
        }
        console.log('data', data)
      })
  }

  return (
    <div>
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
    </div>
  );
}

export default Login;