import React, { useState } from 'react';
import { signUpUser } from '../../API/signUpUser';


const SignUp = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const usernameText = event => setUsername(event.target.value)

  const passwordText = event => setPassword(event.target.value)

  const createNewAccount = () => {
    signUpUser(username, password)
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
        <button onClick={createNewAccount}>Sign Up</button>
      </div>
    </div>
  );
}

export default SignUp;