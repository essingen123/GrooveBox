import React from 'react';
import DrumRack from './DrumRack'
import { Link } from 'react-router';

const DrumMachine = (props) => {
  return(
    <div id='drum-machine-container'>

      <div id='play-controls'>
        <div>play</div>
        <div>stop</div>
        <Link to={'/visualizer'}>
          <button>visualzzz</button>
        </Link>
        <Link to={'/instructions'}>
          <button>I need more instruction</button>
        </Link>
      </div>

      <div id='drum-racks'>
        {Object.keys(props.drumRacks).map((drumRack, i) =>
          <DrumRack key={i} name={drumRack} steps={props.drumRacks[drumRack]}/>
        )}
      </div>

    </div>
  )
}

export default DrumMachine
