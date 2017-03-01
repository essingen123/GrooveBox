import React from 'react';
import DrumStep from './DrumStep';

const DrumRack = (props) => {
  return(
    <div className="single-rack">
      <div className="sample-name">{props.name}</div>
      {props.steps.map((step, i) =>
        <DrumStep
          key={i}
          index={i}
          rackKey={props.name}
          step={step}
          toggleStep={props.toggleStep}
          currentStep={props.currentStep}
        />
      )}
    </div>
  )
}

export default DrumRack
