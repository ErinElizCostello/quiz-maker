import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/loggedOutOptions.css'



const LoggedOutOptions = () => {
  return (
    <div className="container">
      <div className="left-side-navbar">
      <div className="headerTitle">
            <p>QUIZMAKER</p>
            <p className="blue">5</p>
            <p className="green">0</p>
            <p className="yellow">0</p>
            {/* <p className="orange">0</p> */}
            <p className="pink">0</p>
          </div>
      </div>
      <div className="middle-navbar">
      
       
      
      </div>
      <div className="right-side-navbar">
        <div>
          <Link
            className="link"
            to='/login'
          >
            <p className="login">
              Create a quiz
            </p>
          </Link>
        </div>
        <div>
          <Link
            className="link"
            to='/login'
          >
            <p className="login">
              Login
            </p>
          </Link>
        </div>
        <div><p className="slash">/</p></div>
        <div>
          <Link
            className="link"
            to='/signup'
          >
            <p className="signUp">
              Sign up
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoggedOutOptions;