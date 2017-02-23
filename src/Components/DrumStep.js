import React from 'react';

const DrumStep = (props) => {
  return(
    <div>
      <div className={props.step ? 'on' : 'off'}>test</div>
    </div>
  )
}

export default DrumStep
