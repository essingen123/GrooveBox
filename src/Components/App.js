import React, { Component } from 'react';
import Instructions from './Instructions';
import DrumMachine from './DrumMachine';
import Visualizer from './Visualizer';

export default class App extends Component {
  constructor(){
    super()
    this.state={
      kick: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      snare: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      hiHat: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      ride: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      step: 0,
    }
  }

  render() {
    return (
      <div className="App">
        <div>audio player</div>
        {this.props.children}
      </div>
    );
  }
}
