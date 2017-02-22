import React from 'react';
import DrumStep from './DrumStep';
const DrumRack = (props) => {
  return(
    <div className="single-rack">
      <div className="sample-name">{props.name}</div>
      {props.steps.map((step, i) =>
        <DrumStep key={i} step={step}/>
      )}
    </div>
  )
}

export default DrumRack
