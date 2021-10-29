import React from 'react';
import { useHistory } from 'react-router-dom';



const BackButton = (props) => {

  const history = useHistory()

  const goBack = () => history.goBack()

  return (
    <div
      onClick={goBack}
      style={{ border: '1px solid teal', backgroundColor: 'teal', color: 'pink', height: 30, width: 50 }}
    >
      back
    </div>
  );
}

export default BackButton;