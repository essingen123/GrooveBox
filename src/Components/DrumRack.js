import React from 'react';
import DrumStep from './DrumStep';
const DrumRack = (props) => {
  return(
    <div>
      <div id="name">{props.name}</div>
      {props.steps.map((step, i) =>
        <DrumStep key={i} step={step}/>
      )}
    </div>
  )
}

export default DrumRack
