const Y_AXIS = 1;
const X_AXIS = 2;

let max_theta;
let max_a;
let max_b;
let a, b, h, k;

let colorModeColor;

//global color declarations

/*
function preload() {
	//font = loadFont('assets/SourceSansPro-Regular.otf');
}

 */

function setup() {

	let canvas = createCanvas(800, 800);
	canvas.parent('sketchHolder');

	fill(255);
	noStroke();

	max_theta = 0;
	max_a = 5;
	max_b = 5;

	h = 200;
	k = 200;
	a = 1;
	b = 1;

	colorModeColor = true;

	background(0);

}





function draw() {
	/*
	if (colorModeColor) {
		drawWeirdThingOneDot(400, 400, 300, 300, 1, 8, 1);
	} else {
		drawWeirdThingOneDot(400, 400, 300, 300, 1, 8, 0);
	}

	 */

	let stopPoint, n, d;
	n = 4;
	d = 5;
	stopPoint = 10;

	//drawWeirdThingOneDot(400, 400, 300, 300, 1, 8, 1);
	drawWeirdThingOneDot(400, 400, 300, 300, n, d, 1);



	max_theta += 2*PI/300;

	if (max_theta >= stopPoint * PI) {
		fill(255, 0, 0);
		rect(0, 0, 10, 10);
		noLoop();
	}

}


function drawWeirdThingOneDot(xPos, yPos, h, k, n, d, colorMode) {
	let x, y, shapeColor;



	x = xPos + h * Math.cos(n * max_theta/d) * Math.cos(max_theta);
	y = yPos + k * Math.cos(n * max_theta/d) * Math.sin(max_theta);

	switch (colorMode) {
		case 0:
			shapeColor = color(0);
			break;

		case 1:
			shapeColor = getColorFromTheta(max_theta);
			break;
	}

	fill(shapeColor);
	ellipse(x, y, 20 + 20 * sin(max_theta));

}

function getColorFromTheta(theta) {
	let green = Math.cos(theta) * 255 + 237;
	return color(200, green, 200);
}
