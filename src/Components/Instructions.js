import React from 'react';
import { Link } from 'react-router';

const Instructions = ()=> {
    return (
      <div id='trex-layer'>
        <div id='instructions-container'>
          <h1>Vapor Grooves</h1>
          <h3>instructions</h3>
          <li>create a drum loop by toggling the switches on the next screen</li>
          <li>when you're satisfied with your loop, move to the visualizer!</li>
          <li>enjoy the wavy visuals, and change the rhythm by muting drum tracks with keys 1-5</li>

          <Link to={'/drummachine'}>
            <button id="link-to-drums">
              gimme the beat
            </button>
          </Link>
          <p>built with React, p5js, and a little bit of nostalgia</p>
        </div>
      </div>
    )
}

export default Instructions
