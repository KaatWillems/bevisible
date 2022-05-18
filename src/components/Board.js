import React, {useState} from 'react';
import Popup from './features/Popup';


const data = [
  { question: "Hey?", clue: "Ho" },
  { question: "Let's?", clue: "Go" }
];


const Board = ({data}) => {

const [popupState, setPopupState] = React.useState({ open: false });

 function showClue(clue) {
    return () => setPopupState({ open: true, clue });
  }



  return (
    <div>{data.map((item, i) => (
        <div className="Board__question" onClick={showClue(item.clue)}>
          {item.question}
        </div>
      ))}
      {popupState.open === true && (
        <Popup
          clue={popupState.clue}
          onClick={() => setPopupState({ open: false })}
        />
      )}</div>
  )
}

export default Board;