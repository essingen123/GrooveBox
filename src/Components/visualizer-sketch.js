import p5 from 'p5';
import 'p5/lib/addons/p5.sound';

const sketch = (p) => {
  let kickRadius = 50;
  let clapRadius = 50;
  let closedRadius = 50;
  let openRadius = 50;
  let bassRadius = 50;
  let osc, envelope, fft, reverb, delay, midiValue;

  p.setup = () => {
    p.createCanvas(1200, .8*(p.displayHeight));
    osc = new p5.SinOsc();
    reverb = new p5.Reverb();
    delay = new p5.Delay();
    envelope = new p5.Env();
    envelope.setADSR(0.001, 0.5, 0.1, 0.5);
    envelope.setRange(1, 0);
    reverb.process(osc,2,2,false) //source, seconds, decay, reverse
    delay.process(osc, .12, .8, 2300);//source, delay, feedback, lowpass
    osc.start();
    fft = new p5.FFT();
    p.noStroke();
  };

  p.draw = () => {
    p.clear()
    p.background(0)
    if (kickRadius > 50) {
      kickRadius -= 4;
    }
    if (clapRadius > 50) {
      clapRadius -= 4;
    }
    if (closedRadius  > 50) {
      closedRadius  -= 4;
    }
    if (openRadius > 50) {
      openRadius -= 4;
    }
    if (bassRadius > 50) {
      bassRadius -= 4;
    }

    p.fill(255, 43, 56);
    p.ellipse(200, p.height/2, kickRadius);
    p.fill(255, 43, 56);
    p.ellipse(400, p.height/2, clapRadius);
    p.fill(255, 43, 56);
    p.ellipse(600, p.height/2, closedRadius);
    p.fill(255, 43, 56);
    p.ellipse(800, p.height/2, bassRadius);
    p.fill(255, 43, 56);
    p.ellipse(1000, p.height/2, openRadius);

    //map homerow to midi values
    if (p.keyIsDown(65)) {midiValue = 57} //a
    else midiValue = 0;
    if (p.keyIsDown(83)) {midiValue = 59} //s
    if (p.keyIsDown(68)) {midiValue = 62} //d
    if (p.keyIsDown(70)) {midiValue = 65} //f
    if (p.keyIsDown(71)) {midiValue = 68} //g
    if (p.keyIsDown(72)) {midiValue = 71} //h
    if (p.keyIsDown(74)) {midiValue = 74} //j
    if (p.keyIsDown(75)) {midiValue = 77} //k
    if (p.keyIsDown(76)) {midiValue = 79} //l
    if (p.keyIsDown(186)) {midiValue = 81} //;
    if (p.keyIsDown(222)) {midiValue = 84} //'

    let freqValue = p.midiToFreq(midiValue);
    osc.freq(freqValue);
    if (midiValue===0){osc.amp(0)}
    else osc.amp(1)
    if (p.keyIsDown()) {envelope.play(osc, 0, 0.1)}

    // plot FFT.analyze() frequency analysis on the canvas
    let spectrum = fft.analyze();
    for (let i = 0; i < spectrum.length*4; i++) {
      p.fill(spectrum[i], spectrum[i]/10, 0);
      let x = p.map(i, 0, spectrum.length/20, 0, p.width);
      let h = p.map(spectrum[i], 0, 255, 0, p.height);
      p.ellipse(x, p.height, spectrum.length/20, -h);
    }

  }

  p.reDraw = (props) => {
    if (props) {
      if(props.drumRacks['Kick'][props.currentStep] && (!props.mute['Kick'])){
        kickRadius = 200;
      }
      if(props.drumRacks['Clap'][props.currentStep] && (!props.mute['Clap'])){
        clapRadius = 200;
      }
      if(props.drumRacks['ClosedHat'][props.currentStep] && (!props.mute['ClosedHat'])){
        closedRadius = 200;
      }
      if(props.drumRacks['OpenHat'][props.currentStep] && (!props.mute['OpenHat'])){
        openRadius = 200;
      }
      if(props.drumRacks['Bass'][props.currentStep] && (!props.mute['Bass'])){
        bassRadius = 200;
      }

    }
  };

};

export default sketch
