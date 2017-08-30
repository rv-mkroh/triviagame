import React from 'react';
import PropTypes from 'prop-types';

function Scorebar(props) {
  return (
    <div className="scorebarcontainer">
      <div className="scorebar" style={{"height": props.height}}></div>
    </div>
  );
}

Scorebar.PropTypes = {
  height: PropTypes.string
};

export default Scorebar;