import React, { Component } from 'react';
import Instructions from './Instructions';
import DrumMachine from './DrumMachine';
import Visualizer from './Visualizer';

export default class App extends Component {
  constructor(){
    super()
    this.state={
      step: 0,
      drumRacks: {
        kick: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        snare: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        hiHat: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        ride: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      },
    }
  }

  render() {

    const Children = React.cloneElement(this.props.children, {
      step: this.state.step,
      drumRacks: this.state.drumRacks,
    })
    return (
      <div className="App">
        <div>audio player</div>
        {Children}
      </div>
    );
  }
}
