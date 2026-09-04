
//global color declarations
var colorBgPurple;
var colorFgPurple;
var colorCatOrange;
var colorCatYellow;
var colorCatPink;
var colorBlack;
var colorWhite;
var colorTrueBlack;

var lightsOn = true;

function setup() {
	var canvas = createCanvas(800, 800);
	canvas.parent('sketchHolder');

	colorBgPurple = color(201, 205, 255);
	colorFgPurple = color(197, 147, 195);
	colorCatOrange = color(253, 170, 23);
	colorCatYellow = color(254, 255, 125);
	colorCatPink = color(250, 197, 190);
	colorBlack = color(15, 15, 15);
	colorWhite = color(254, 254, 254);
	colorTrueBlack = color(0, 0, 0);
}



//global variable declarations


function draw() {
	//preparations


	if (lightsOn) {
		//background
		background(colorBgPurple);

		drawTable(0, 620);

		drawLayer1();
		drawLayer2();
		drawLayer3();
		drawLayer4();
		drawLayer5();
		drawLayer6();
		drawLayer7();

		drawLamp();
	} else {
		//background
		background(colorBlack);

		drawEvilGarf();
		drawDarkLamp();
	}

}

function mouseClicked() {
	//lightsOn = !lightsOn;
	if (mouseX > 140 && mouseX < 166 && mouseY > 291 && mouseY < 314) {
		lightsOn = !lightsOn;
	}
}

function drawTable(x, y) {
	noStroke();

	fill(colorFgPurple);
	rect(x, y + 4, 800, 176);

	fill(colorBlack);
	rect(x, y, 800, 5);
}

/**
 * Draws tail and bottom front foot
 */
function drawLayer1() {
	fill(colorCatOrange);
	strokeWeight(3);
	stroke(colorBlack);

	ellipse(245, 679, 174, 109); //bottom tail
	ellipse(580, 673, 108, 49); //bottom front foot
}

/**
 * Draws body and thigh
 */
function drawLayer2() {
	fill(colorCatOrange);
	strokeWeight(3);
	stroke(colorBlack);

	ellipse(436, 599, 317, 295); //body
	ellipse(308, 655, 193,185); //top large back thigh
}

/**
 * Draws top tail, top feet, head
 */
function drawLayer3() {
	fill(colorCatOrange);
	strokeWeight(3);
	stroke(colorBlack);

	ellipse(232, 714, 152, 78); //top tail
	ellipse(395, 736, 124, 56); //top back foot
	ellipse(541, 733, 116, 56); //top front foot
	ellipse(558, 471, 242, 196) //garf head
}

/**
 * Draws cheeks and whites of eyes
 */
function drawLayer4() {
	fill(colorCatYellow);
	strokeWeight(3);
	stroke(colorBlack);

	ellipse(487, 490, 53, 52);//left cheek
	ellipse(637, 489, 53, 52);//right cheek

	ellipse(528, 492, 71, 36);//left lower cheek
	ellipse(600, 492, 72, 37);//right lower cheek

	fill(colorWhite);
	strokeWeight(3);
	stroke(colorBlack);

	ellipse(524, 445, 79, 96);//left eye
	ellipse(603, 446, 79, 96);//right eye
}

/**
 * Draws ears
 */
function drawLayer5() {
	fill(colorCatOrange);
	strokeWeight(3);
	stroke(colorBlack);

	push();
	translate(465, 378);
	rotate(-1 * PI / 5);
	arc(0, 0, 55, 85, PI, 2*PI, PIE); //left ear
	pop();

	push();
	translate(638, 378);
	rotate(PI / 5);
	arc(0, 0, 55, 85, PI, 2*PI, PIE); //right ear
	pop();
}

/**
 * Draws nose, pupils, eyelids
 */
function drawLayer6() {
	fill(colorCatPink);
	strokeWeight(3);
	stroke(colorBlack);

	ellipse(564, 478, 38, 30); //nose


	fill(colorBlack);
	noStroke();

	ellipse(525, 448, 20, 27); //left pupil

	ellipse(603, 448, 20, 27); //right pupil

	fill(colorCatOrange);
	strokeWeight(3);
	stroke(colorBlack);

	arc(524, 445, 79, 96, PI, 0, PIE);//left eyelid
	arc(603, 446, 79, 96, PI, 0, PIE);//right eyelid
}

/**
 * Draws those good good stripes
 */
function drawLayer7() {
	fill(colorBlack);
	noStroke();

	triangle(194, 710, 170, 729,  196, 740);//tail stripe 1
	triangle(223, 720, 208, 745, 236, 748);//tail stripe 2
	triangle(258, 716, 251, 746, 278, 739);//tail stripe 3

	triangle(250, 595, 227, 625, 276, 639);//leg stripe 1
	triangle(286, 575, 311, 619, 324, 571);//leg stripe 2

	triangle(340, 494, 301, 535, 368, 557); //back stripe 1
	triangle(367, 476, 412, 524, 420, 458);//back stripe 2
}

/**
 * Draws the lamp, duh. Is the lamp made out of cat fur? Who knows. Probably.
 */
function drawLamp() {
	fill(colorWhite);
	strokeWeight(3);
	stroke(colorBlack);

	ellipse(119, 26, 23, 23); //top chain 1
	ellipse(119, 73, 23, 23); //top chain 1
	ellipse(119, 112, 23, 23); //top chain 1

	fill(colorCatOrange);
	quad(80, 134, 45, 220, 182, 221, 153, 134);//Lamp

	fill(colorWhite);
	ellipse(152, 241, 16, 16);//bottom chain 1
	ellipse(152, 269, 16, 16);//bottom chain 1

	fill(colorCatPink);
	ellipse(153, 303, 24, 24); //final chain
}

/**
 * draw the lamp, but in the dark
 */
function drawDarkLamp() {
	fill(colorBlack);
	strokeWeight(3);
	stroke(colorTrueBlack);

	ellipse(119, 26, 23, 23); //top chain 1
	ellipse(119, 73, 23, 23); //top chain 1
	ellipse(119, 112, 23, 23); //top chain 1

	quad(80, 134, 45, 220, 182, 221, 153, 134);//Lamp

	ellipse(152, 241, 16, 16);//bottom chain 1
	ellipse(152, 269, 16, 16);//bottom chain 1

	ellipse(153, 303, 24, 24); //final chain
}

function drawEvilGarf() {
	fill(colorCatYellow);
	noStroke();

	arc(564, 492, 143, 64, 0, PI); //Grin

	stroke(colorBlack);
	strokeWeight(3);

	beginShape();
		vertex(628, 507);
		vertex(625, 492);
		vertex(620, 511);
		vertex(614, 491);
		vertex(609, 515);

		vertex(604, 492);
		vertex(598, 518);
		vertex(592, 491);
		vertex(585, 521);
		vertex(575, 491);

		vertex(571, 522);
		vertex(564, 491);
		vertex(558, 521);
		vertex(550, 491);
		vertex(543, 521);

		vertex(536, 491);
		vertex(529, 518);
		vertex(524, 492);
		vertex(518, 515);
		vertex(512, 491);

		vertex(507, 510);
		vertex(503, 491);
		vertex(500, 507);
	endShape();

	quad(525, 396, 509, 446, 524, 491, 538, 447);//left eye
	quad(604, 396, 590, 446, 604, 491, 617, 447);//left eye
}

