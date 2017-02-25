p.reDraw = function (props) {
  if (props){
    rotation = props.rotation * Math.PI / 180;
  }
};

const sketch = (p) => {
  let rotation = 0;
  let y;
  let drumDots = [];

  p.setup = function () {
    p.createCanvas(p.displayWidth, .8*(p.displayHeight));
    p.stroke(255);
    p.noLoop();
   y = p.height * 0.5;
  };

  p.draw = () => {
    p.background(0);
    y = y - 4;
    if (y < 0) {
      y = p.height;
    }
    p.line(0, y, p.width, y);
  }

  p.reDraw = function (props) {
    if (props){
      p.draw()
    }
  };

};

export default sketch
