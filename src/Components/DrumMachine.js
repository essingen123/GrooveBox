import React from 'react';
import DrumRack from './DrumRack'
import { Link } from 'react-router';

const DrumMachine = (props) => {

  return(
    <div id='drum-machine-container' onKeyPress={console.log('pizza')}>

      <div id='play-controls'>
        <h1 id="drum-logo">VaporGrooves</h1>
        <button id='play-button' autoFocus onClick={()=>props.playPause()} >
          play/pause
        </button>
        <Link to={'/visualizer'}>
          <button id='visuals-link'>
            visualizer
          </button>
        </Link>
        <Link to={'/instructions'}>
          <button id='instructions-link'>
            instructions
          </button>
        </Link>
      </div>

      <div id='drum-racks'>
        {Object.keys(props.drumRacks).map((drumRack, i) =>
          <DrumRack key={i}
                    name={drumRack}
                    steps={props.drumRacks[drumRack]}
                    toggleStep={props.toggleStep}
                    currentStep={props.currentStep}
          />
        )}
      </div>

    </div>
  )
}

export default DrumMachine
