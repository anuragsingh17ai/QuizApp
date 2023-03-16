import React,{useContext} from 'react';
import { QuizContext } from '../helpers/contexts';
import { Questions } from '../helpers/QuestionBank'; 
import "../App.css";

function EndScreen() {
  const {score,setScore,setGameState}=useContext(QuizContext);

  const restartQuiz=()=>{
    setScore(0);
    setGameState("menu");
  };
  return (
    <div className='EndScreen'>
      <h1>Quiz Finished</h1>
      <h3>{score}/ {Questions.length} </h3>
      <h3>
        <button onClick={restartQuiz}>Restart Quiz</button>
      </h3>
    </div>
  )
}

export default EndScreen