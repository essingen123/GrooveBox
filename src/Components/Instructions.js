import React from 'react';
import { Link } from 'react-router';

const Instructions = ()=> {
    return (
      <div id='instructions-container'>
        <h1>Vapor Grooves</h1>
        <h3>instructions</h3>
        <li>create a drum loop by toggling the switches on the next screen</li>
        <li>when you're satisfied with your beat, click view!</li>
        <li>enjoy the wavy visuals, and change the rhythm by muting drum tracks with keys 1-4</li>
        <li>pro-tip, the home row of your keyboard becomes a playable keyboard in the visualizer!</li>
        <Link to={'/drummachine'}>
          <button id="link-to-drums">gimme the beat</button>
        </Link>
      </div>
    )
}

export default Instructions
