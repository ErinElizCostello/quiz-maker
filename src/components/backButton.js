import React from 'react';
import { useHistory } from 'react-router-dom';

import '../styles/backButton.css'


const BackButton = () => {

  const history = useHistory()

  const goBack = () => history.goBack()

  return (
    <div>
      <button
        id="backButton"
        onClick={goBack}
      >
       {`<`}
      </button>
    </div>
  );
}

export default BackButton;