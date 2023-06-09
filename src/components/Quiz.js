import React, {useState,useContext} from 'react';
import{Questions} from "../helpers/QuestionBank";
import { QuizContext } from '../helpers/contexts';

function Quiz() {

  const {setGameState,score,setScore}=useContext(QuizContext);

  const [currQuestion,setCurrQuestion]=useState(0);
  const [optionChosen,setoptionChosen]=useState("");
  
  const nextQuestion=()=>{
    if(Questions[currQuestion].answer== optionChosen){
      setScore(score+1);
    }
    setCurrQuestion(currQuestion+1);
  };

  const finishQuiz=()=>{
    if(Questions[currQuestion].answer== optionChosen){
      setScore(score+1);
    }
    setGameState("endScreen")
  }
  
  return (
    <div className='Quiz'>
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className='options'>
        <button onClick={()=>setoptionChosen("A")}>{Questions[currQuestion].OptionA}</button>
        <button onClick={()=>setoptionChosen("B")}>{Questions[currQuestion].OptionB}</button>
        <button onClick={()=>setoptionChosen("C")}>{Questions[currQuestion].OptionC}</button>
        <button onClick={()=>setoptionChosen("D")}>{Questions[currQuestion].OptionD}</button>
      </div>
      {currQuestion == Questions.length-1?(
        <button onClick={finishQuiz}> Finish Quiz</button>
      ):
      <button onClick={nextQuestion}>Next Question</button>
      }
    </div>
  )
}

export default Quiz