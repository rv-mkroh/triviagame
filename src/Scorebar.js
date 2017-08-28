import React from 'react';

function Scorebar(props) {
  return (
    <div className="scorebarcontainer">
      <div className="scorebar" style={{"height": props.height}}></div>
    </div>
  );
}

export default Scorebar;