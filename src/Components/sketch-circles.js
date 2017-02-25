// p.reDraw = function (props) {
//   if (props){
//     rotation = props.rotation * Math.PI / 180;
//   }
// };

const sketch = (p) => {
  let kickRadius = 50;
  let clapRadius = 50;
  let closedRadius = 50;
  let openRadius = 50;
  let bassRadius = 50;


  p.setup = function () {
    p.createCanvas(1200, .8*(p.displayHeight));
  };

  p.draw = () => {
    p.clear()
    p.background(0)
    if (kickRadius > 50) {
      kickRadius = kickRadius - 4;
    }
    if (clapRadius > 50) {
      clapRadius = clapRadius - 4;
    }
    if (closedRadius  > 50) {
      closedRadius  = closedRadius - 4;
    }
    if (openRadius > 50) {
      openRadius = openRadius - 4;
    }
    if (bassRadius > 50) {
      bassRadius = bassRadius - 4;
    }

    p.fill(255, 43, 56);
    p.ellipse(200, p.height/2, kickRadius);
    p.fill(255, 43, 56);
    p.ellipse(400, p.height/2, clapRadius);
    p.fill(255, 43, 56);
    p.ellipse(600, p.height/2, closedRadius);
    p.fill(255, 43, 56);
    p.ellipse(800, p.height/2, openRadius);
    p.fill(255, 43, 56);
    p.ellipse(1000, p.height/2, bassRadius);
  }

  p.reDraw = function (props) {
    if (props){
      if(props.drumRacks['Kick'][props.currentStep]){
        kickRadius = 200;
      }
      if(props.drumRacks['Clap'][props.currentStep]){
        clapRadius = 200;
      }
      if(props.drumRacks['ClosedHat'][props.currentStep]){
        closedRadius = 200;
      }
      if(props.drumRacks['OpenHat'][props.currentStep]){
        openRadius = 200;
      }
      if(props.drumRacks['Bass'][props.currentStep]){
        bassRadius = 200;
      }

    }

  };

};

export default sketch
