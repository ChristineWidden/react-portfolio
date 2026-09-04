
var starsXArray = [];
var starsYArray = [];
var starsSizeArray = [];

var dirtXArray = [];
var dirtXArray2 = [];

var dirtSpotsXArray = [];
var dirtSpotsYArray = [];


var moonSize = 700;


/*
If I put more work into this, I may add more detail to the shadows and attempt to improve the way that scaling and translating works,
but for now I am satisfied with what I have.
 */


function setup() {
	var canvas = createCanvas(600, 600);
	canvas.parent('sketchHolder');


	//generate random star size and placement
	for (i=0; i<100; i++) {
		var randX = Math.random() * 600;
		var randY = Math.random() * 600;
		var randSize = Math.random() * 10;

		starsXArray[i] = randX;
		starsYArray[i] = randY;
		starsSizeArray[i] = randSize;
	}

	//create random placement for dirt
	for (j=0; j<70; j++) {
		randX = Math.random() * 600;
		dirtXArray[j] = randX;
		randX = Math.random() * 600;
		dirtXArray2[j] = randX;
	}

	//create random placement for blue spots on dirt
	for (k=0; k<150; k++) {
		randX = Math.random() * 600;
		dirtSpotsXArray[k] = randX;
		randY = Math.random() * 30;
		dirtSpotsYArray[k] = randY + 560;
	}

}

var shineX = 0;

function draw() {

	let colorBlue = color('#5584A7');
	let colorYellow = color(251, 220, 8);
	let colorYellowShadow = color(131, 133, 58);

	noStroke(); /*disables the outline*/
	background(colorBlue); /*blue*/

	fill(255, 255, 255);

	for (i=0; i<starsXArray.length; i++) {
		ellipse(starsXArray[i], starsYArray[i], starsSizeArray[i], starsSizeArray[i]);
	}

	ellipse(0, 590, moonSize, moonSize); //moon

	fill(134, 95, 51);
	rect(0, 560, 600, 600);

	for (j=0; j<dirtXArray.length; j++) {
		ellipse(dirtXArray[j], 560, 8, 10);
		ellipse(dirtXArray2[j], 560, 8, 5);
	}

	fill('#5584A7');
	for(k=0; k<dirtSpotsXArray.length; k++) {
		ellipse(dirtSpotsXArray[k], dirtSpotsYArray[k], 9, 4);
	}

	/*


	stroke(colorYellowShadow);
	strokeWeight(2);

	fill(251, 220, 8); //yellow
	rect(150, 36, 80, 230);//backpack

	fill(131, 133, 58);//shadow yellow
	rect(150, 36, 20, 230);//backpack shadow


	fill(colorYellow);
	rect(203, 26, 120, 130); //helmet
	rect(168, 301, 146, 90);//lower torso
	ellipse(251, 248, 200, 180); //chest


	noStroke();

	fill(colorYellowShadow);
	ellipse(289, 181, 90, 20); //below collar shadow
	rect(203, 36, 38, 120); //helmet shadow

	fill(colorYellow);
	rect(191, 156, 140, 25); //collar
	quad(168, 392, 316, 392, 264, 441, 251, 439);//weiner zone

	quad(119, 364, 158, 372, 165, 415, 110, 414); //left hand
	quad(418, 299, 452, 315, 430, 352, 398, 332); //right hand

	beginShape();//left leg
	vertex(168, 390);
	vertex(251, 439);
	vertex(208, 554);
	vertex(224, 570);
	vertex(223, 588);
	vertex(154, 588);
	vertex(154, 510);
	vertex(167, 466);
	endShape(CLOSE);

	beginShape();//right leg
	vertex(315, 393);
	vertex(337, 474);
	vertex(329, 554);
	vertex(344, 573);
	vertex(345, 586);
	vertex(275, 584);
	vertex(279, 564);
	vertex(271, 516);
	vertex(279, 474);
	vertex(259, 440);
	endShape(CLOSE);

	stroke(colorYellowShadow);

	beginShape();//right arm
	vertex(331, 174);
	vertex(364, 200);
	vertex(379, 246);
	vertex(418, 300);
	vertex(398, 333);
	vertex(338, 291);
	vertex(338, 240);
	vertex(319, 201);
	endShape(CLOSE);

	beginShape();//left arm
	vertex(213, 182);
	vertex(233, 222);
	vertex(178, 289);
	vertex(164, 330);
	vertex(161, 372);
	vertex(110, 368);
	vertex(102, 299);
	vertex(130, 222);
	vertex(174, 172);
	endShape(CLOSE);

	noStroke();




	fill(colorYellowShadow);
	noStroke();
	triangle(398, 333, 338, 291, 338, 273); //right arm lower shadow

	fill(255, 255, 255);
	rect(248, 63, 72, 65); //helmet glass


	stroke(255);
	line(333, 449, 522, 204);

	noStroke();
	fill(colorYellow);
	ellipse(546, 179, 50, 107);*/


	//drawAstronaut(102, 22, 1);
	//drawAstronaut(102, 22, 1.3);

	drawAstronaut(102, 22, 1);

}







function drawAstronaut(astroX, astroY, scaleValue) {

	push();
		//translate(-102 + astroX + (600 * ((1-scaleValue)/2)), -25 + astroY + (700*((1-scaleValue)/2)));
		translate(-102 + astroX + (475 * ((1-scaleValue)/2)), -25 + astroY + (550*((1-scaleValue)/2)));
		//translate(-102 + astroX, -25 + astroY);
		//scale(scaleValue);

		scale(scaleValue);

		let colorBlue = color('#5584A7');
		let colorYellow = color(251, 220, 8);
		let colorYellowShadow = color(131, 133, 58);

		stroke(colorYellowShadow);
		strokeWeight(2);

		fill(251, 220, 8); //yellow
		rect(150, 36, 80, 230);//backpack

		fill(131, 133, 58);//shadow yellow
		rect(150, 36, 20, 230);//backpack shadow


		fill(colorYellow);
		rect(203, 26, 120, 130); //helmet
		rect(168, 301, 146, 90);//lower torso



		noStroke();

		ellipse(251, 248, 200, 180); //chest
		fill(colorYellowShadow);
		ellipse(289, 181, 90, 20); //below collar shadow
		rect(203, 36, 38, 120); //helmet shadow
		arc(283, 304, 95, 30, PI, 2* PI);

		fill(colorYellow);
		rect(191, 156, 140, 25); //collar
		quad(168, 392, 316, 392, 264, 441, 251, 439);//weiner zone

		quad(119, 364, 158, 372, 165, 415, 110, 414); //left hand
		quad(418, 299, 452, 315, 430, 352, 398, 332); //right hand

		beginShape();//left leg
		vertex(168, 390);
		vertex(251, 439);
		vertex(208, 554);
		vertex(224, 570);
		vertex(223, 588);
		vertex(154, 588);
		vertex(154, 510);
		vertex(167, 466);
		endShape(CLOSE);

		beginShape();//right leg
		vertex(315, 393);
		vertex(337, 474);
		vertex(329, 554);
		vertex(344, 573);
		vertex(345, 586);
		vertex(275, 584);
		vertex(279, 564);
		vertex(271, 516);
		vertex(279, 474);
		vertex(259, 440);
		endShape(CLOSE);

		stroke(colorYellowShadow);

		beginShape();//right arm
		vertex(331, 174);
		vertex(364, 200);
		vertex(379, 246);
		vertex(418, 300);
		vertex(398, 333);
		vertex(338, 291);
		vertex(338, 240);
		vertex(319, 201);
		endShape(CLOSE);

		beginShape();//left arm
		vertex(213, 182);
		vertex(233, 222);
		vertex(178, 289);
		vertex(164, 330);
		vertex(161, 372);
		vertex(110, 368);
		vertex(102, 299);
		vertex(130, 222);
		vertex(174, 172);
		endShape(CLOSE);

		noStroke();




		fill(colorYellowShadow);
		noStroke();
		triangle(398, 333, 338, 291, 338, 273); //right arm lower shadow

		fill(255, 255, 255);
		rect(248, 63, 72, 65); //helmet glass

		fill(colorBlue);
		rect(282, 63, 15, 65);
		rect(310, 63, 4, 65);

		stroke(255);
		strokeWeight(5);
		line(333, 449, 522, 204); //lollipop stick

		noStroke();
		fill(colorYellow);
		ellipse(546, 179, 50, 107); //lollipop top

		fill(colorYellowShadow);
		arc(546, 179, 50, 107, 0.5*PI, 1.5*PI)//lollipop shadow

		//scale(1.0);

		//fill(0, 0, 0);
		//rect(0, 0, 100, 100);
	pop();
}