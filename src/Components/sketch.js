const sketch = (p) => {

  var xspacing = 1;   // Distance between each horizontal location
  var w;              // Width of entire wave
  var maxwaves = 8;   // total # of waves to add together
  var theta = 0.0;

  var amplitude = new Array(maxwaves);   // Height of wave

  // Value for incrementing X, to be calculated
  // as a function of period and xspacing
  var dx = new Array(maxwaves);
  // Using an array to store height values
  // for the wave (not entirely necessary)
  var yvalues;

  p.setup = () => {
    p.createCanvas(p.displayWidth, .8*(p.displayHeight));
    p.frameRate(30);
    p.colorMode(p.RGB, 255, 255, 255, 100);
    w = p.width + 16;

    for (let i = 0; i < maxwaves; i++) {
      amplitude[i] = p.random(20,250);
      var period = p.random(50,400); // Num pixels before wave repeats
      dx[i] = (p.TWO_PI / period) * xspacing;
    }

    yvalues = new Array(p.floor(w/xspacing));
  }

  p.draw= () => {
    p.background(0);
    p.calcWave();
    p.renderWave();
  }

  p.calcWave = () => {
    // Increment theta (try different values
    // for 'angular velocity' here
    theta += 0.10;

    // Set all height values to zero
    for (let i = 0; i < yvalues.length; i++) {
      yvalues[i] = 0;
    }

    // Accumulate wave height values
    for (var j = 0; j < maxwaves; j++) {
      var x = theta;
      for (var i = 0; i < yvalues.length; i++) {
        // Every other wave is cosine instead of sine
        if (j % 2 === 0)  yvalues[i] += p.sin(x)*amplitude[j];
        else yvalues[i] += p.cos(x)*amplitude[j];
        x+=dx[j];
      }
    }
  }

  p.renderWave= () => {
    // A simple way to draw the wave with an ellipse at each location
    p.noStroke();
    p.fill(255,50);
    p.ellipseMode(p.CENTER);
    for (var x = 0; x < yvalues.length; x++) {
      p.ellipse(x*xspacing,p.width/2+yvalues[x],16,16);
    }
  }
}

export default sketch
