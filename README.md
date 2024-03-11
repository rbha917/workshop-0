# workshop-0

### Link to sketch: https://rbha917.github.io/workshop-0/

- ; at the end of every function
- highlight code and do ctrl + / to deactivate a section
- function setup
	createCanvas (x, x) = size of page
- function draw
	background (x) = colour of page
	stroke (x) = colour of lines/outlines
	fill (x) = colour of object
		use rgb e.g. 255, 0, 0 = red
		or grayscale 0-255 = black to white
 	add another number (x, y, z, w) and w = opacity
## Shapes
	rect (x, y, z, w) = rectangle
	x = position from x axis
	y = position from y axis
	z = width
	w = height

## Variables
-	Definition: let x = 0, make it the starting point for rect, after code write x = x + 3, makes it loop and animate, add console. log (x) to see specific position offscreen
	mouseX and mouseY = move object with mouse

## Conditionals
	if (x > width){
	x = 0: will bring it back to the starting point
	if (mouseX > width / 2) {
	fill (make red):
	} else {
	fill (yellow)
