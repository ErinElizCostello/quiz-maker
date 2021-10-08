import React from 'react';
import { Link } from 'react-router-dom';



const BackButton = (props) => {
  return (
    <Link to={props.backTo === 'questionsForm' ? '/createAQuiz' : '/'}>
      <div style={{ border: '1px solid teal', backgroundColor: 'teal', color: 'pink', height: 30, width: 50 }}>
        back
      </div>
    </Link>
  );
}

export default BackButton;