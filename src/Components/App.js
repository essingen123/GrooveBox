import React, { Component } from 'react';
import ReactHowler from 'react-howler';
import howler from 'howler';

export default class App extends Component {
  constructor(){
    super()
    this.state={
      playMusic: false,
      currentStep: 0,
      drumRacks: {
        Kick: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        Clap: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        HiHat: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        Bass: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      },
      sounds: {
        Kick: new howler.Howl({src: ['Sounds/Kick.mp3']}),
        HiHat: new howler.Howl({src: ['Sounds/HiHat.mp3']}),
        Clap: new howler.Howl({src: ['Sounds/Clap.mp3']}),
        Bass: new howler.Howl({src: ['Sounds/Bass.mp3']})
      },
    }
  }

  toggleStep(key, index) {
    let newRack = this.state.drumRacks
    newRack[key][index] = !newRack[key][index]
    this.setState({ drumRacks: newRack })
  }

  playPause() {
    this.setState({ playMusic: !this.state.playMusic })
  }

  playStep() {
    if (this.state.playMusic){
      Object.keys(this.state.drumRacks).forEach((key)=>{
        if(this.state.drumRacks[key][this.state.currentStep]){
          this.state.sounds[key].play()
        }
      })
      if (this.state.currentStep < 15){
        this.setState({currentStep: this.state.currentStep + 1})
      } else {
        this.setState({currentStep: 0})
      }
    }
  }

  playLoop() {
    setInterval(this.playStep.bind(this), 200)
  }

  render() {

    const Children = React.cloneElement(this.props.children, {
      toggleStep: this.toggleStep.bind(this),
      playPause: this.playPause.bind(this),
      currentStep: this.state.currentStep,
      drumRacks: this.state.drumRacks,
    })

    return (
      <div className="App">
        <div className="audio-player" onClick={()=>this.playLoop()}>audio player</div>
        {Children}
      </div>
    );
  }
}
