import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListOfQuizzes from './quizTaker/listOfQuizzes';
import { verifyTheUser } from '../API/verifyTheUser';
import LogOut from './signUpAndLogin/logOut';
import { setResultOfQuizTaken } from '../state/actions/resultOfQuizTaken'
import { useDispatch } from 'react-redux';
import DeleteUserAccount from './deleteUserAccount';
import { setQuestion } from '../state/actions/questions';
import LinkToCreateAQuiz from '../woops/linkToCreateAQuiz';

const LandingPage = () => {
  const dispatch = useDispatch()

  // useEffect(() => {
  //   window.location.reload()
  // }, []);
  
  const verify = () => {
    // window.location.reload()
    // dispatch(setResultOfQuizTaken([]))
    const token = JSON.parse(localStorage.getItem('QuizUser')) ? JSON.parse(localStorage.getItem('QuizUser')).token : ''

    verifyTheUser(token)
    
  }


  const clearOldData = () => {
    dispatch(setQuestion([]))
  }

  return (
    <div>
      {localStorage.getItem('QuizUser') ?
        <div>
          <div>{`Hello ${JSON.parse(localStorage.getItem('QuizUser')).payload.user}`}</div>
          <LogOut />
          <Link to="/myQuizzes">
            <div onClick={verify}>
              My quizzes
            </div>
          </Link>
          {/* <LinkToCreateAQuiz /> */}
          <div   
          // onClick={
          //      () => clearOldData()
          //      }
          >
            <Link to='/createAQuiz' 
           
              >Create A Quiz!</Link>
          </div>
          <div>
            <Link to='/deleteUserAccount'>
              Delete my account
            </Link>
          </div>
        </div>
        :
        <div>
          <div>
            <Link to='/login'>Login</Link>
          </div>
          <div>
            <Link to='/signup'>Sign up</Link>
          </div>
        </div>
      }
      <div>
        <ListOfQuizzes />
      </div>
    </div>
  );
}

export default LandingPage;