/* export SVG
DDF 2019
need to have p5.svg.js in project and in index.html
see -https://github.com/zenozeng/p5.js-svg
this will save an SVG file in your download folder
*/
var pW = 11
var pH = 8.5

function setup() {
  createCanvas(pW*72, pH*72, SVG); // Create SVG Canvas
  strokeWeight(1); // do 0.1 for laser
  stroke(0, 0, 0); // red is good for laser
  noFill(); // better not to have a fill for laser
}

function draw() {

  for(let x=0; x<250; x+=6) {
   line(x, 0, x+120, 700)
  }
  for(let i = 0; i <= 500; i+=6){
    line(250, i-200, 500, i+150)
  }
  for (let i = 0; i <= 250; i += 7){
    line(500, i, 800+i, 0);
    line(750, i, 500+i, 250);
    line(500, 250+i, 500+i, 250)
    line(750, 250+i, 600+i, 500)
  }
  for (let i=0; i<=250; i+=5) {
    line(900, i, 1000-i, 250)
    line(1200-i, 0, 900, i)
    line(500, 450+i, 1000-i, 620)
    line(1000, 250+i, 1000-i, 250)
  }

  save("mySVG.svg"); // give file name
  print("saved svg");
  noLoop(); // we just want to export once
}
