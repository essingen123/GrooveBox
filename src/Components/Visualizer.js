import React from 'react';
import { Link } from 'react-router';
import P5Wrapper from './P5Wrapper';
import sketch from './sketch';

export default class Visualizer extends React.Component {

  render(){
    return (
      <div id="visualizer-container">
        <P5Wrapper sketch={sketch} props={this.props}/>
        <Link to={'/drummachine'}>
          <button>back to the drums</button>
        </Link>
        <Link to={'/instructions'}>
          <button>I need more instruction</button>
        </Link>
      </div>
    )
  }
}
