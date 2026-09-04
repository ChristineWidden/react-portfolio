const Y_AXIS = 1;
const X_AXIS = 2;

//global color declarations
let colorSkyBlueLight;
let colorSkyBlueDark;
let colorStemGreen;
let colorGrassGreen;

let x;

let hueVary = 0;

function setup() {

	let canvas = createCanvas(800, 800);
	canvas.parent('sketchHolder');

	colorSkyBlueLight = color(23, 155, 226);
	colorSkyBlueDark = color(1, 50, 126);
	colorStemGreen= color(10, 120, 50);
	colorGrassGreen = color(10, 100, 50);

	setGradient(0, 0, width, height, colorSkyBlueDark, colorSkyBlueLight, Y_AXIS);
	noStroke();
}



//global variable declarations


function draw() {


	//fill(255);

	//stroke(0);

	let petals, tightness, hue, randX, randY;

	let i;

	for (i = 0;  i <  150; i++) {
		drawCloud(random(0 - width*0.2, width + width*0.1), random(height * 0.4), 200, 100, 50, 30, 30, 20);
	}

	for (i = 0;  i <  150; i++) {
		//drawCloud(random(0 - width*0.2, width + width*0.1), random(height * 0.4), 200, 100, 50, 60, 30, 20);
	}

	fill(colorGrassGreen);
	rect(0, height * 0.82, width, height*0.18);

	for (i = 0; i < 50; i++) {
		randX = Math.random() * width;
		randY = Math.random() * height * 0.3 + height * 0.5; //limit the height
		//randY = Math.random() * height; // do not limit the height
		petals = Math.random() * 80 + 20;
		tightness = Math.random();
		hue = Math.random() * 255;

		drawFlower(randX, randY, petals, 5, tightness, hue);
	}

	//drawFlower(width/2, height/2, 50, 10, 1, 150);

	//drawFlower(80, 80, 100, 5, 2, 0);

	//drawFlower(80, 80, 50, 5, 0.5, 0);

	//drawFlower(width/2, height/2, 53, 70, 12, hueVary);

	hueVary++;
	if (hueVary == 256){
		hueVary = 0;
	}

	noLoop();

}

function drawFlower(x, y, petals, petalSize, tightness, hue) {

	drawStem(x, y);

	push();

	colorMode(HSB, 255);

	translate(x, y);

	for (var i = petals-1; i >= 0; i--) {
		fill(hue, 200 * (i/petals) + 55, 200);
		rotate(3.8833576);
		ellipse(i * tightness, 0, petalSize * (1 + i/10), petalSize * (1 + i/10));
		//x += 1;
	}

	pop();
}

function drawStem(x, y) {

	fill(colorStemGreen);
	rect(x-2, y, 4, height-y);
}

/**
 *
 * @param x
 * @param y
 * @param cloudWidth
 * @param cloudHeight
 * @param basePoofSize
 * @param poofSizeVary
 * @param poofs
 * @param transparency 0 to 255
 */
function drawCloud(x, y, cloudWidth, cloudHeight, basePoofSize, poofSizeVary, poofs, transparency) {

	push();

	colorMode(RGB, 255);
	translate(x, y);

	fill(230, 230, 230, transparency);

	for (var i = 0; i <= poofs; i++) {
		ellipse(x + random(cloudWidth), y + random(cloudHeight), random(basePoofSize - poofSizeVary/2, basePoofSize + poofSizeVary/2));
	}

	pop();
}

function mouseClicked() {

}

/**
 * Function taken from p5.js website: https://p5js.org/examples/color-linear-gradient.html
 * @param x X position
 * @param y Y position
 * @param w Width
 * @param h Height
 * @param c1 Color 1
 * @param c2 Color 2
 * @param axis
 */
function setGradient(x, y, w, h, c1, c2, axis) {
	noFill();

	if (axis === Y_AXIS) {
		// Top to bottom gradient
		for (let i = y; i <= y + h; i++) {
			let inter = map(i, y, y + h, 0, 1);
			let c = lerpColor(c1, c2, inter);
			stroke(c);
			line(x, i, x + w, i);
		}
	} else if (axis === X_AXIS) {
		// Left to right gradient
		for (let i = x; i <= x + w; i++) {
			let inter = map(i, x, x + w, 0, 1);
			let c = lerpColor(c1, c2, inter);
			stroke(c);
			line(i, y, i, y + h);
		}
	}
}

