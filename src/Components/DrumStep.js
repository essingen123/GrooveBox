import React from 'react';

const DrumStep = (props) => {
  return(
    <div className={props.currentStep === props.index ? "step current" : "step"}
         id={props.mute[props.rackKey] ? "mute" : ""}
         onClick={()=> props.toggleStep(props.rackKey, props.index)}
    >
      <div className={props.step ? 'step-on' : 'step-off'}></div>
    </div>
  )
}

export default DrumStep


// {props.mute[props.rackKey] ? "mute" : ""}
