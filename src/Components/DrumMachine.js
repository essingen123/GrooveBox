import React from 'react';
import DrumRack from './DrumRack'
import { Link } from 'react-router';

export default class DrumMachine extends React.Component {
  render(){
    return (
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
          <DrumRack />
          <DrumRack />
          <DrumRack />
          <DrumRack />
        </div>
        
      </div>
    )
  }
}
