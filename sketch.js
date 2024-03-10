let x = 0

function setup() {
  createCanvas(750, 525);
}

function draw() {
  background(220);
  stroke (255);
  fill (0, 0, 255);
  rect(mouseX, mouseY, 50, 70);
  
  stroke (255);
  fill (255, 0, 255);
  rect(x, 100, 50, 70);
  
  x = x + 3;
  
  console.log (x)
  
 if (x > width / 2){
   x = 0;
 } 
  
  fill (0, 255, 255);
  triangle(mouseX + 5, mouseY + 5, 58, 20, 86, 75);
  
  
  
}