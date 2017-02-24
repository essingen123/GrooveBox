// p.reDraw = function (props) {
//   if (props.rotation){
//     rotation = props.rotation * Math.PI / 180;
//   }
// };

const sketch = (p) => {
  let rotation = 0;
  let y;
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

  p.mousePressed = ()=>{
    p.redraw();
  }
};

export default sketch
