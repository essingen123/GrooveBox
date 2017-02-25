import React, { Component } from 'react';
import howler from 'howler';

export default class App extends Component {
  constructor(){
    super()
    this.state={
      playMusic: false,
      currentStep: 0,
      tempo: 200,
      drumRacks: {
        Kick: [true,false,false,false,true,false,false,false,true,false,false,false,true,false,false,false],
        Clap: [false,false,true,false,false,false,false,true,false,false,true,false,false,false,true,false],
        ClosedHat: [false,true,true,true,true,true,true,true,true,false,true,false,true,false,true,true],
        OpenHat: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        Bass: [false,true,false,true,false,true,false,true,false,true,true,false,true,false,true,false],
      },
      sounds: {
        Kick: new howler.Howl({src: ['Sounds/Kick.mp3']}),
        OpenHat: new howler.Howl({src: ['Sounds/OpenHat.mp3']}),
        ClosedHat: new howler.Howl({src: ['Sounds/ClosedHat.mp3']}),
        Clap: new howler.Howl({src: ['Sounds/Clap.mp3']}),
        Bass: new howler.Howl({src: ['Sounds/Bass.mp3']})
      },
    }
  }

  componentDidMount() {
    this.playLoop()
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
    this.playStep()
    setTimeout(this.playLoop.bind(this),this.state.tempo)
  }

  updateTempo(e) {
    this.setState({tempo: +e.target.value})
  }

  render() {
    const Children = React.cloneElement(this.props.children, {
      toggleStep: this.toggleStep.bind(this),
      playPause: this.playPause.bind(this),
      updateTempo: this.updateTempo.bind(this),
      currentStep: this.state.currentStep,
      drumRacks: this.state.drumRacks,
      tempo: this.state.tempo,
    })

    return (
      <div className="App">
        {Children}
      </div>
    );
  }
}
