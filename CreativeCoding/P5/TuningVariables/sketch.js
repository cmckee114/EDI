function setup() {
  windowWidth=720;
  createCanvas(windowWidth, windowWidth);
  fill('red');
  strokeWeight(1);
}

function draw() {
  var num = 10; //variable for the number of squares in the array
  
  var sideLen = windowWidth/num;
  
  
  for (var y=0; y<windowWidth; y=y+sideLen){ //loop to create a row of squares
 
  
  for (var x=0; x<windowWidth; x=x+sideLen){ //loop to create a row of squares
    
    quad(x,y, 
        x+360, y,
        x+360, y+360,
        x,y+360)
    
  }
  }
}

