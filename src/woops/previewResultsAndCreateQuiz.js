import React from 'react';
import BackButton from '../components/backButton';
import CreateQuizButton from '../components/quizMaker/createQuizButton';
import EditResultsButton from './editResultsButton';
import PreviewResults from './previewResults';


const PreviewResultsAndCreateQuiz = () => {
  return ( 
    <div>
    <EditResultsButton />
    <PreviewResults />
    <CreateQuizButton />
    </div>
   );
}
 
export default PreviewResultsAndCreateQuiz;