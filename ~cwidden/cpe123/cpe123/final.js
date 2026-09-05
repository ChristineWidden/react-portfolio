const Y_AXIS = 1;
const X_AXIS = 2;

//global color declarations
let colorSkyBrownLight;
let colorSkyBrownDark;
let colorStemGreen;
let colorGrassGreen;
let colorBuildingBrownDefault;
let colorBackgroundBrown;
let colorLights;
let colorSkyBlue;
let colorWater;

let colorSailboatWood;
let colorSailboatSail;
let colorSailboatWoodTransparent;
let colorSailboatSailTransparent;

let buildingArray1 = [];
let buildingArray2 = [];
let buildingArray3 = [];

let earthRunning;

let sailboatX;
let sailboatY;
let sailboatScale;
let sailboatSpeed;

let frame;

let buildingsPerArray = 40;

let x;

let hueVary = 0;

function setup() {
	earthSetup();
}

function earthSetup() {
	earthRunning = true;

	//document.getElementById("earthInstructions").removeAttribute("hidden");
	document.getElementById("earthInstructions").style.display = "inline";
	frame = 0;

	let canvas = createCanvas(800, 800);
	canvas.parent('sketchHolder');

	defineColors();

	sailboatX = width*0.5;
	sailboatY = height*0.9;
	sailboatScale = 1;
	sailboatSpeed = 0.3;

	//setGradient(0, 0, width, height, colorSkyBrownDark, colorSkyBrownLight, Y_AXIS);

	generateBuildings();
	noStroke();
}

function defineColors() {
	colorSkyBrownLight = color(84, 63, 38);
	colorSkyBrownDark = color(60, 41, 18);
	colorSkyBlue = color(99, 219, 255);
	colorWater = color(196, 241, 255);

	//colorBuildingBrownDefault = color(82, 63, 36);
	colorBuildingBrownDefault = color(236, 227, 155);

	colorBackgroundBrown = color(90, 68, 35);
	colorStemGreen= color(10, 120, 50);
	colorGrassGreen = color(10, 100, 50);
	colorLights = color(250, 250, 230);

	colorSailboatSail = color(255);
	colorSailboatWood = color(200, 20, 0);
	colorSailboatSailTransparent = color(255, 255, 255, 100);
	colorSailboatWoodTransparent = color(200, 20, 0, 100);
}


//global variable declarations

function generateBuildings() {
	for (i = 0; i < buildingsPerArray; i++) {
		buildingArray1[i] = new Building(-0.2*width, width*0.6, height*0.55, height*0.8, 75, 130, 0.3, colorBuildingBrownDefault);
	}
}

function draw() {
	if(earthRunning) {
		drawEarth();
	}
}

function drawEarth() {

	background(colorSkyBlue);
	fill(colorWater);
	rect(0, height*0.9, width, height*0.1);

	fill(255);
	ellipse(width*0.2, height*0.3, 100);//sun
	fill(255, 255, 255, 200);
	ellipse(width*0.2, height*0.3, 120 + 10*sin(0.02* frame));//sun2
	fill(255, 255, 255, 100);
	ellipse(width*0.2, height*0.3, 160 + 20*sin(0.02 * frame));//sun3

	drawSailboat(sailboatX, sailboatY, sailboatScale);

	for (let i = 0; i<buildingsPerArray; i++) {
		drawBuilding2(buildingArray1[i]);
	}

	sailboatX += sailboatSpeed;

	frame++;

}

/*
function drawEarth2() {


	//fill(255);

	//stroke(0);

	//let tightness, hue, randX, randY;

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

/*
	for (i = 0; i < 50; i++) {
		randX = Math.random() * width * 1.2 - width * 0.2;
		randY = Math.random() * height * 0.2 + height * 0.7 + 0.25 * randX; //limit the height
		//randY = Math.random() * height; // do not limit the height

		drawBuildingDark(randX, randY, random(100, 130));
	}



	noLoop();
}

 */

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

	//fill(colorBuildingBrownDefault);

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

function drawBuilding2(buildingObject) {
	push();
		colorMode(HSB, 255);
		fill(buildingObject.buildingColorHue, buildingObject.buildingColorSaturation, buildingObject.buildingColorBrightnessLight);
		rect(buildingObject.x, buildingObject.y, buildingObject.buildingWidth, buildingObject.buildingHeight);

		switch (buildingObject.topperType) {
			case 0:
				break;
			case 1:
				rect(buildingObject.x + buildingObject.buildingWidth* 0.2, buildingObject.y - 10, buildingObject.buildingWidth * 0.6, 15);
				break;
			case 2:
				triangle(buildingObject.x, buildingObject.y - 15, buildingObject.x, buildingObject.y, buildingObject.x + buildingObject.buildingWidth, buildingObject.y);
				break;
			case 3:
				triangle(buildingObject.x, buildingObject.y, buildingObject.x + buildingObject.buildingWidth, buildingObject.y - 15, buildingObject.x + buildingObject.buildingWidth, buildingObject.y);
				break;
		}


		stroke(40, 40 + random(-30, 30), 250);
		strokeWeight(1);

		for (let i = 0; i < buildingObject.lightRows; i++) {
			let x1 = buildingObject.x + 0.05 * buildingObject.buildingWidth;
			let x2 = buildingObject.x + 0.95 * buildingObject.buildingWidth;
			let y2 = buildingObject.y + 1 + buildingObject.lightSpacing * i;

			stroke(colorLights);
			strokeWeight(3);
			if	(buildingObject.hasLightsArray[i]) {
				line(x1, y2, x2, y2);
			}
		}

	pop();
}

function drawSailboat(x, y, scaleValue) {
	push();
		translate(x, y);
		scale(scaleValue);

		fill(colorSailboatSail);
		triangle(-1, -6, -1, -2, -3, -2);
		triangle(1, -6, 1, -2, 3, -2);

		fill(colorSailboatWood);
		rect(-4, 0, 8, 2);

	pop();

	drawSailboatReflection(x, y, scaleValue);
}

function drawSailboatReflection(x, y, scaleValue) {
	push();
	translate(x, y+(4*scaleValue));
	scale(scaleValue);
	rotate(PI);

	fill(colorSailboatSailTransparent);
	triangle(-1, -6, -1, -2, -3, -2);
	triangle(1, -6, 1, -2, 3, -2);

	fill(colorSailboatWoodTransparent);
	rect(-4, 0, 8, 2);

	pop();
}

function mouseClicked() {
	if(earthRunning) {
		if (sailboatX > width) {
			sailboatX = width * 0.5;

			let num = Math.random();
			sailboatScale = 1 + 5 * num;
			sailboatSpeed = 0.3 + num;
			sailboatY = height * (0.9 + 0.05 * num);

		}

		if(implicitCircle(mouseX, mouseY, width*0.2, height*0.3, 50) < 0) {
			document.getElementById("earthInstructions").style.display = "none";
			earthRunning = false;
		}
	}
}



class Building {
	lightSpacing;
	buildingHeight;
	height;
	y;
	x;
	lightRows;
	hasLightsArray;
	constructor(minX, maxX, minY, maxY, widthMin, widthMax, slant, color) {
		this.x = random(minX, maxX);
		this.y = random(minY, maxY) + slant * this.x;
		this.buildingHeight = height - this.y;
		this.lightSpacing = random(2,10);
		this.lightRows = this.buildingHeight / this.lightSpacing;
		this.buildingWidth = random(widthMin, widthMax);
		this.topperType = getRandomInt(0,3);

		this.hasRedLight = getRandomInt(1, 3) === 1;

		this.hasLightsArray = [];

		for (let i = 0; i < this.lightRows; i++) {
			this.hasLightsArray[i] = getRandomInt(1,3) === 1;
		}

		push();
			colorMode(HSB, 255);

			//23, 94, 56 base color
			this.buildingColorHue = hue(color);
			this.buildingColorSaturation = saturation(color);
			this.buildingColorBrightnessLight = brightness(color) + random(-30, 30);
			this.buildingColorBrightnessDark = this.buildingColorBrightnessLight - 10;
		pop();
	}
}

function implicitCircle(x, y, cx, cy, r) {
	return pow(x-cx, 2) + pow(y-cy, 2) - pow(r, 2);
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

