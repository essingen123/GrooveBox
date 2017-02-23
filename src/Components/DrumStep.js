import React from 'react';

const DrumStep = (props) => {
  return(
    <div className="step"
         onClick={()=> props.toggleStep(props.rackKey, props.index)}
    >
      <div className={props.step ? 'step-on' : 'step-off'}>test</div>
    </div>
  )
}

export default DrumStep
