import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/loggedOutOptions.css'



const LoggedOutOptions = () => {
  return (
    <div className="container">
      <div className="left-side-navbar"></div>
      <div className="middle-navbar"></div>
      <div className="right-side-navbar">
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