let gif1;
let gif3;

function preload (){
  gif1 = loadImage ('assets/gif1.gif');
  gif3 = loadImage ('assets/gif3.gif');
}

function setup() { //runs once
  frameRate(1);
  createCanvas(windowWidth, windowHeight);
}

function draw() {

background (255);

var num = 15; //variable for the number of squares in the array
var sideLen = windowWidth/num;//variable for the side lenth of each square
  for (var y = 0; y < windowHeight; y = y + sideLen) {//loop to create rows in the y direction
     for (var x = 0; x < windowWidth; x = x + sideLen) {// loop to create a row of squares in the x direction0

       var r = floor(random(3));
       switch (r) {
            case 0:
              image(gif1,x,y)
            case 1:
              image(gif3,x,y)
      }
}
}
//noLoop ();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
