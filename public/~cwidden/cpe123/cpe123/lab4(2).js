const Y_AXIS = 1;
const X_AXIS = 2;

//global color declarations
let colorSkyBrownLight;
let colorSkyBrownDark;
let colorStemGreen;
let colorGrassGreen;
let colorBuildingBrownDefault;
let colorBackgroundBrown;

let x;

let hueVary = 0;

function setup() {

	let canvas = createCanvas(800, 800);
	canvas.parent('sketchHolder');

	colorSkyBrownLight = color(84, 63, 38);
	colorSkyBrownDark = color(60, 41, 18);
	colorBuildingBrownDefault = color(82, 63, 36);
	colorBackgroundBrown = color(90, 68, 35);
	colorStemGreen= color(10, 120, 50);
	colorGrassGreen = color(10, 100, 50);

	setGradient(0, 0, width, height, colorSkyBrownDark, colorSkyBrownLight, Y_AXIS);
	noStroke();
}



//global variable declarations


function draw() {


	//fill(255);

	//stroke(0);

	//let tightness, hue, randX, randY;

	let i;

	for (i = 0;  i <  60; i++) {
		drawCloud(random(0 - width*0.2, width + width*0.1), random(height * 0.4), 200, 50, 50, 30, 20, 5, 1);
	}

	for (i = 0;  i <  60; i++) {
		drawCloud(random(0 - width*0.2, width + width*0.1), random(height * 0.4 + height * 0.3), 200, 50, 50, 30, 20, 5, 120);
	}

	fill(colorSkyBrownDark);
	rect(0, 0.85 * height, width, 0.4 * height);  //background terrain

	for (i = 0; i < 100; i++) {
		randX = Math.random() * width * 1.2 - width * 0.2;
		randY = Math.random() * height * 0.25 + height * 0.55 + 0.3 * randX; //limit the height
		//randY = Math.random() * height; // do not limit the height

		drawBuilding(randX, randY, random(75, 130));
	}

	for (i = 0; i < 30; i++) {
		randX = Math.random() * width * 1.2 - width * 0.2;
		randY = Math.random() * height * 0.25 + height * 0.4 + 0.3 * randX; //limit the height
		//randY = Math.random() * height; // do not limit the height

		drawBuilding(randX, randY, random(35, 75));
	}

	for (i = 0; i < 20; i++) {
		randX = Math.random() * width * 1.2 - width * 0.2;
		randY = Math.random() * height * 0.25 + height * 0.55 + 0.3 * randX; //limit the height
		//randY = Math.random() * height; // do not limit the height

		drawBuilding(randX, randY, random(75, 130));
	}

	/*
	for (i = 0;  i <  100; i++) {
		drawCloud(random(0 - width*0.2, width + width*0.2), random(height * 0.4)  + height * 0.4, 300, 80, 50, 30, 20, 10, 120);
	}

	 */


	for (i = 0; i < 50; i++) {
		randX = Math.random() * width * 1.2 - width * 0.2;
		randY = Math.random() * height * 0.2 + height * 0.7 + 0.25 * randX; //limit the height
		//randY = Math.random() * height; // do not limit the height

		drawBuildingDark(randX, randY, random(100, 130));
	}



	noLoop();

}

/**
 * Draw a light-colored building with lights
 * @param x
 * @param y
 * @param buildingWidth
 */
function drawBuilding(x, y, buildingWidth) {
	let buildingHeight = height - y;
	//let lightSpacingRandom = random(6, 15);
	let lightSpacingRandom = random(2, 10);
	let lightRows = buildingHeight / lightSpacingRandom;
	let randomLightDensity = random(-4, 20);


	push();

	colorMode(HSB, 255);

	//23, 94, 56 base color
	let buildingColorBrightness = 56 + random(-30, 30);
	//let colorBuildingLight = color(23, 94, buildingColorBrightness);
	//let colorBuildingDark = color(23, 94, buildingColorBrightness - 10);

	let colorBuildingLight = color(26, 120, buildingColorBrightness);
	let colorBuildingDark = color(26, 120, buildingColorBrightness - 10);

	fill(colorBuildingBrownDefault);

	fill(colorBuildingLight);
	rect(x, y, buildingWidth, buildingHeight);

	buildingTopRandom = random(1, 6);
	if (buildingTopRandom > 3) {
		if (buildingTopRandom > 5) {
			rect(x + buildingWidth* 0.2, y - 10, buildingWidth * 0.6, 15);
		} else if (buildingTopRandom > 4) {
			triangle(x, y - 15, x, y, x + buildingWidth, y);
		} else {
			triangle(x, y, x + buildingWidth, y - 15, x + buildingWidth, y);
		}
	}

	fill(colorBuildingDark);
	rect(x + buildingWidth * 0.8, y, buildingWidth * 0.2, buildingHeight);

	/*
	let buildingRedLightsRandom = random(0, 3);
	if (buildingRedLightsRandom < 1) {
		fill(0, 255, 200);
		rect(x, y, 3, 3);
		rect((x + buildingWidth) - 3, y, 3, 3);
	}

	 */


	let buildingRedLightsRandom = random(0, 3);
	if (buildingRedLightsRandom < 2) {
		fill(0, 255, 200);

		let randomRadius = random(3, 7);
		drawRedLight(x, y, randomRadius);
		drawRedLight(x + buildingWidth, y, randomRadius);
	}

	stroke(40, 40 + random(-30, 30), 250);
	strokeWeight(1);
	for (i = 0; i < lightRows; i++) {
		let x1 = x + 0.05 * buildingWidth;
		let x2 = x + 0.95 * buildingWidth;
		let y2 = y + 1 + lightSpacingRandom * i;
		//line(x + 0.05 * buildingWidth, y + 1 + lightSpacingRandom * i, x + 0.95 * buildingWidth, y + 1 + lightSpacingRandom * i);
		randomWindowsOnRow = random(4 + randomLightDensity, 20 + randomLightDensity);
		for (j = 0; j < randomWindowsOnRow; j++) {
			let randomLightPosition = Math.random();
			line(x1 + randomLightPosition * (x2 - x1), y2, x1 + randomLightPosition * (x2 - x1) + 1, y2);
		}
		if (random(0, 6) < 2) {
			randomLightDensity = random(-4, 20);
		}
	}

	pop();

}

/**
 *
 * @param x position
 * @param y position
 * @param radius of the light
 */
function drawRedLight(x, y, radius) {
	push();
	colorMode(HSL, 255);

	fill(0, 255, 100, 100);
	ellipse(x, y, radius);

	fill(0, 255, 100);
	ellipse(x, y, 0.6 * radius);

	fill(0, 120, 200);
	ellipse(x, y, 0.5 * radius);

	fill(0, 20, 200);
	ellipse(x, y, 0.4 * radius);

}

/**
 * Draw a dark-colored building with no lights
 * @param x
 * @param y
 * @param buildingWidth
 */
function drawBuildingDark(x, y, buildingWidth) {
	let buildingHeight = height - y;
	let lightSpacingRandom = random(6, 15);
	let lightRows = buildingHeight / lightSpacingRandom;


	push();

	colorMode(HSB, 255);

	//23, 94, 56 base color
	//let buildingColorBrightness = 56 + random(-30, 10);
	let buildingColorBrightness = 10;
	let colorBuildingLight = color(23, 94, buildingColorBrightness);
	//let colorBuildingDark = color(23, 94, buildingColorBrightness - 10);

	fill(colorBuildingBrownDefault);

	fill(colorBuildingLight);
	rect(x, y, buildingWidth, buildingHeight);

	//fill(colorBuildingDark);
	//rect(x + buildingWidth * 0.8, y, buildingWidth * 0.2, buildingHeight);

	/*
	stroke(40, 40, 250);
	strokeWeight(1);
	for (i = 0; i < lightRows; i++) {
		let x1 = x + 0.05 * buildingWidth;
		let x2 = x + 0.95 * buildingWidth;
		let y2 = y + 1 + lightSpacingRandom * i;
		//line(x + 0.05 * buildingWidth, y + 1 + lightSpacingRandom * i, x + 0.95 * buildingWidth, y + 1 + lightSpacingRandom * i);
		randomWindowsOnRow = random(4, 20);
		for (j = 0; j < randomWindowsOnRow; j++) {
			let randomLightPosition = Math.random();
			line(x1 + randomLightPosition * (x2 - x1), y2, x1 + randomLightPosition * (x2 - x1) + 1, y2);
		}
	}
		 */

	pop();

}

/**
 *
 * @param x position
 * @param y position
 * @param cloudWidth Width of the space in which "poofs" can be created
 * @param cloudHeight Height of the space in which "poofs" can be created
 * @param basePoofSize The starting point for the size of the "poofs"
 * @param poofSizeVary How much the radius of the "poofs" can vary from the base size.
 * @param poofs The number of "poofs" in the cloud
 * @param transparency 0 (invisible) to 255 (opaque) The transparency of the individual poofs.
 * @param brightness 0 (dark clouds) to 255 (bright clouds)
 */
function drawCloud(x, y, cloudWidth, cloudHeight, basePoofSize, poofSizeVary, poofs, transparency, brightness) {

	push();

	colorMode(RGB, 255);
	translate(x, y);

	fill(brightness, brightness, brightness, transparency);

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

