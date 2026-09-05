
let bugXArray = [];
let bugYArray = [];
let bugXVelocityArray = [];
let bugYVelocityArray = [];
let bugColorShiftArray = [];
let bugScaleArray = [];
let bugWingsStartArray = [];
let dirtXArray = [];
let dirtYArray = [];

let dirtSpots;
let bugs;

let colorBlack;
let colorRed;
let colorGray;
let colorOrange;
let colorDarkDirt;

let loop;

function setup() {
	var canvas = createCanvas(600, 600);
	canvas.parent('sketchHolder');

	background(100, 100, 255);

	noStroke();

	defineColors();

	loop = 0;
	dirtSpots = 1000;
	bugs = 100;

	for(let i = 0; i < bugs; i++) {
		bugXArray[i] = random(50, width - 50);
		bugYArray[i] = random(50, height-50);
		bugXVelocityArray[i] = random(-1, 1);
		bugYVelocityArray[i] = random(-1, 1);
		bugColorShiftArray[i] = random(-5, 5);
		bugScaleArray[i] = random(5, 10);
		bugWingsStartArray[i] = random(0, 6);
	}

	for(i=0; i<dirtSpots; i++){
		dirtXArray[i] = random(0, width);
		dirtYArray[i] = random(0, height);
	}
}

function defineColors() {
	colorBlack = color(0, 0, 0);
	colorRed = color(183, 31, 0);
	colorOrange = color(216, 127, 0);
	colorGray = color(141, 164, 182);
	colorDarkDirt = color(85, 60, 68);
}

function draw() {
	background(colorDarkDirt);


	fill(colorBlack);
	for (i = 0; i < dirtSpots; i++) {
		ellipse(dirtXArray[i], dirtYArray[i], 5);
	}

	fill(255);
	for(let i =0; i < bugs; i++) {
		drawBug(bugXArray[i], bugYArray[i], bugXVelocityArray[i], bugYVelocityArray[i], 1, 0.5 * Math.sin(0.1 * (loop) + bugWingsStartArray[i]), 0, bugScaleArray[i]);
	}



	//drawBug(100, 100, 0, 0, 1, 0.5 * Math.sin(0.1 * loop), 2);

	loop++;
}


function drawBug(x, y, vx, vy, varScale, wingRotation, rotation, bugScale) {
	push();
	//triangle(-10, 0, -1, 0, -5, 5); //left wing


	translate(x + vx*loop, y + vy * loop);

	//scale(varScale);
	//rotate(rotation);

	scale(bugScale);


	fill(colorOrange);
	ellipse(0, 2, 2, 5);
	fill(colorBlack);
	ellipse(0, 2, 0.2, 3);
	fill(colorRed);
	ellipse(0, 1, 1, 0.5);
	ellipse(0, 2, 1, 0.5);
	ellipse(0, 3, 1, 0.5);

	drawLeftBugWing(wingRotation);

	fill(colorBlack);
	triangle(-1, 0, 1, 0, 0, -2);

	drawRightBugWing(wingRotation);
	//triangle(10, 0, 1, 0, 5, 5); //right wing



	pop();
}

function drawLeftBugWing(rotation) {
	push();
	translate(-1, 0);
	rotate(rotation);

	fill(colorGray);
	triangle(-9, 0, 0, 0, -4, 5);
	fill(colorBlack);
	triangle(-8, 1, -1, 1, -4, 4);

	pop();
}

function drawRightBugWing(rotation) {
	push();
	translate(1, 0);
	rotate(-rotation);

	fill(colorGray);
	triangle(9, 0, 0, 0, 4, 5);
	fill(colorBlack);
	triangle(8, 1, 1, 1, 4, 4);
	pop();
}

function mouseClicked() {

}