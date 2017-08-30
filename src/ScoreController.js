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

ScoreController.PropTypes = {
  plus: PropTypes.func,
  minus: PropTypes.func,
  test: PropTypes.string.isRequired
};

export default ScoreController;