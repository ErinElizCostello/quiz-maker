import React from 'react';
import { Link } from 'react-router-dom';



const EditResultsButton = () => {
  return (
    <div>
      <Link to="/resultsForm">
        <button>Edit Results</button>
      </Link>
    </div>
  );
}

export default EditResultsButton;