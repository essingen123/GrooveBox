import React from 'react';
import { Link } from 'react-router';

export default class Visualizer extends React.Component {
  render(){
    return (
      <div>
        <h1>Visualizer.</h1>
        <p>This will use P5js to draw graphics to a full screen canvas based on the drum Arrays in state</p>
        <p>user can mute the different drum channels with keys 1-4</p>
        <p>extension feature will be a keyboard playable with the computer keyboard</p>
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
