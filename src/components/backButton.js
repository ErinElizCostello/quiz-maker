import React from 'react';
import { Link, useHistory } from 'react-router-dom';


const BackButton = (props) => {

  const history = useHistory()

  const goBack = () => history.goBack()

  // const history = useHistory()
  // history.goBack()
  return (
    // <Link to={props.backTo === 'questionsForm' ? '/createAQuiz' : 'home' ? '/' : null}>
      <div onClick={goBack} style={{ border: '1px solid teal', backgroundColor: 'teal', color: 'pink', height: 30, width: 50 }}>
        back
      </div>
    // </Link>
  );
}

export default BackButton;