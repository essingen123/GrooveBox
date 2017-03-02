## Vapor Grooves

a drum sequencer and visualizer built with react-router, p5js, and a little bit of nostalgia.

## Project Status

We have a functioning 16-step sequencer, accompanying visualizer, and a hidden synthesizer in the sequencer that the user can play with the home row on the keyboard. Need to track down memory leak that i suspect has something to do with reat-router and the canvas.

## Project Screen Shot(s)

![Splash Page](http://imgur.com/tJoZoEe "splash page")
![Visualizer](http://imgur.com/brsw7Ld "Visualizer")
![Drum Machine](http://imgur.com/QooJWBE "splash page")

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000/`  

#### Reflection:  

This was a 2 week project built during my third module at Turing School of Software and Design. Project goals included learning to use p5 to create simple drawings and synthesize noise and solidify my familiarity with react and react-router, and get a little better at styling.

I've been struggling to figure out a memory leak issue that happens when we route away from the canvas and then back to it.

I plan on rebuilding without react or router to improve performance of the canvas.
