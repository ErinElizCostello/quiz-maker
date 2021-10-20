import React from 'react';
import { useDispatch, useSelector } from 'react-redux';



const PreviewResults = () => {

  const displayResults = useSelector(state => state.setResults)

  return (
    <div>
      <div>
        {
          displayResults.map(result => (
            <div>
              {
                `mostly ${result.letter}'s ...`
              }
              <br />
              {
                result.text
              }

              <br /><br /><br />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default PreviewResults;