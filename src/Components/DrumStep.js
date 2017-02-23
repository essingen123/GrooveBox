import React from 'react';

const DrumStep = (props) => {
  return(
    <div className={props.currentStep === props.index ? "step current" : "step"}
         onClick={()=> props.toggleStep(props.rackKey, props.index)}
    >
      <div className={props.step ? 'step-on' : 'step-off'}></div>
    </div>
  )
}

export default DrumStep
