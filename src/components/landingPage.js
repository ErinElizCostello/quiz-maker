import React from 'react';
import { Link } from 'react-router-dom';
import ListOfQuizzes from './quizTaker/listOfQuizzes';



const LandingPage = () => {
  return ( 
    <div>
      
      <Link to='/createAQuiz'>Create A Quiz!</Link>
      <ListOfQuizzes />
    </div>
   );
}
 
export default LandingPage;