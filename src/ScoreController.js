import React from 'react';
import PropTypes from 'prop-types';

function ScoreController(props) {
  return (
    <div className="scorecontroller">
      <button className="scorebtn plus" onClick={props.plus}>+</button>
      <button className="scorebtn minus" onClick={props.minus}>–</button>
    </div>
  );
}

ScoreController.propTypes = {
  plus: PropTypes.func,
  minus: PropTypes.func,
};

export default ScoreController;