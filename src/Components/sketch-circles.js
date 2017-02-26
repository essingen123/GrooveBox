import p5 from 'p5';
import 'p5/lib/addons/p5.sound';

const sketch = (p) => {
  let kickRadius = 50;
  let clapRadius = 50;
  let closedRadius = 50;
  let openRadius = 50;
  let bassRadius = 50;
  let osc, envelope, fft;
  let scaleArray = [60, 62, 64, 65, 67, 69, 71, 72];
  let note = 0;

  p.setup = () => {
    p.createCanvas(1200, .8*(p.displayHeight));
    osc = new p5.SinOsc();
    envelope = new p5.Env();
    envelope.setADSR(0.001, 0.5, 0.1, 0.5);
    envelope.setRange(1, 0);
    // osc.start();
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

    if (p.frameCount % 60 === 0 || p.frameCount === 1) {
      var midiValue = scaleArray[note];
      var freqValue = p.midiToFreq(midiValue);
      osc.freq(freqValue);

      envelope.play(osc, 0, 0.1);
      note = (note + 1) % scaleArray.length;
    }

    // plot FFT.analyze() frequency analysis on the canvas
    var spectrum = fft.analyze();
    for (var i = 0; i < spectrum.length/20; i++) {
      p.fill(spectrum[i], spectrum[i]/10, 0);
      var x = p.map(i, 0, spectrum.length/20, 0, p.width);
      var h = p.map(spectrum[i], 0, 255, 0, p.height);
      p.rect(x, p.height, spectrum.length/20, -h);
    }



  }

  p.reDraw = (props) => {
    if (props){
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
