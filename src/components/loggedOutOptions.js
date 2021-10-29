import React from 'react';

import { Link } from 'react-router-dom';



const LoggedOutOptions = () => {
  return (
    <div>
      <div>
        <Link to='/login'>
          Login
        </Link>
      </div>
      <div>
        <Link to='/signup'>
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default LoggedOutOptions;