import React from 'react';
import DrumRack from './DrumRack'

export default class DrumMachine extends React.Component {
  render(){
    return (
      <div id='drum-machine-container'>
        <div id='play-controls'>
          <div>play</div>
          <div>stop</div>
          <div>visuals</div>
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
