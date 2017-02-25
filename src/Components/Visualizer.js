import React from 'react';
import { Link } from 'react-router';
import P5Wrapper from './P5Wrapper';
import sketch from './sketch-circles';

// export default class Visualizer extends React.Component {

const Visualizer = (props) => {

  const spaceBar = (e) =>{
    if(e.charCode===32){
      props.playPause();
    }
  }

  return (
    <div id="visualizer-container" tabIndex='0' onKeyPress={(e)=>spaceBar(e)}>
      <P5Wrapper sketch={sketch} drumRacks={props.drumRacks} currentStep = {props.currentStep}/>
      <div id="links-wrapper">
        <Link to={'/drummachine'}>
          <button>back to the drums</button>
        </Link>
        <Link to={'/instructions'}>
          <button>I need more instruction</button>
        </Link>
      </div>
    </div>
  )
}

export default Visualizer;
