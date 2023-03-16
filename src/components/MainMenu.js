import React,{useContext} from 'react';
import { QuizContext } from '../helpers/contexts';
import "../App.css";

function MainMenu() {
  const{setGameState}=useContext(QuizContext);
  return (
    <div className='Menu'>
      <button onClick={()=>{ setGameState("quiz");}}>start</button>
    </div>
  )
}

export default MainMenu