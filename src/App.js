import React, { Component } from 'react';
import './App.css';
import Instructions from './Instructions';
import DrumMachine from './DrumMachine';
import Visualizer from './Visualizer';

export default class App extends Component {
  constructor(){
    super()
    this.state={
      // toggling instructions screen
      instructions: true,
      // toggling between drums and visualizer
      drumMachine: true,
      // rack Arrays, eventually merge into single array of objects.
      kick: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      snare: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      hiHat: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      ride: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      //time tracking
      step: 0,
    }
  }

  render() {
    return (
      <div className="App">
        <Instructions />
        <DrumMachine />
        <Visualizer />
        <div>audio player</div>
      </div>
    );
  }
}
