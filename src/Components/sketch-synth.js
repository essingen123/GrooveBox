import p5 from 'p5';
import 'p5/lib/addons/p5.sound';

const sketch = (p) => {
  let osc, envelope, fft;

  let scaleArray = [60, 62, 64, 65, 67, 69, 71, 72];
  let note = 0;

  p.setup = () => {
    p.createCanvas(710, 200);
    osc = new p5.SinOsc();

    // Instantiate the envelope
    envelope = new p5.Env();

    // set attackTime, decayTime, sustainRatio, releaseTime
    envelope.setADSR(0.001, 0.5, 0.1, 0.5);

    // set attackLevel, releaseLevel
    envelope.setRange(1, 0);

    osc.start();

    fft = new p5.FFT();
    p.noStroke();
  };

  p.draw = () => {
    p.background(20);

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
  };

};

export default sketch
