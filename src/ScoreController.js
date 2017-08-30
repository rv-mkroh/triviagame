import React from 'react';

function ScoreController(props) {
  return (
    <div className="scorecontroller">
      <button className="scorebtn plus" onClick={props.plus}>+</button>
      <button className="scorebtn minus" onClick={props.minus}>–</button>
    </div>
  );
}

export default ScoreController;