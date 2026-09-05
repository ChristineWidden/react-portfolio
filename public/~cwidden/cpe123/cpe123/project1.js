
var starsXArray = [];
var starsYArray = [];
var starsSizeArray = [];

var dirtXArray = [];
var dirtXArray2 = [];

var dirtSpotsXArray = [];
var dirtSpotsYArray = [];


var moonSize = 700;


var scaleDF = 1.0;//10
var xDF = 250;//250
var yDF = 320;//320
var rotDF= 0;
var rwheel;
var Lwheel;
var Lwheelframe;
var rwheelframe;
var mconnectorframe;
var LLwheelframe;
var LRwheelframe;
var BLTRframe;
var TLBRframe;
var Lhbar;
var Mhbar;
var Rhbar;
var moveBike;

var bikeChangePosition;
var astroFloat;


/*
If I put more work into this, I may add more detail to the shadows and attempt to improve the way that scaling and translating works,
but for now I am satisfied with what I have.
 */


function setup() {
	var canvas = createCanvas(1200, 600);
	canvas.parent('sketchHolder');

	rwheel = 0;
	Lwheel = 0;
	Lwheelframe = 0;
	rwheelframe = 0;
	mconnectorframe = 0;
	LLwheelframe = 0;
	LRwheelframe = 0;
	BLTRframe = 0;
	TLBRframe = 0;
	Lhbar = 0;
	Mhbar = 0;
	Rhbar = 0;
	moveBike = false;
	astroFloat = 0;

	bikeChangePosition = -300;

	//generate random star size and placement
	for (i=0; i<200; i++) {
		var randX = Math.random() * 1200;
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
	for (k=0; k<300; k++) {
		randX = Math.random() * 700;
		dirtSpotsXArray[k] = randX;
		randY = Math.random() * 80;
		dirtSpotsYArray[k] = randY + 520;
	}

}


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

	ellipse(600, 590, moonSize, moonSize); //moon

	fill(134, 95, 51);
	rect(600, 520, 600, 600);//dirt

	for (j=0; j<dirtXArray.length; j++) {
		ellipse(600 + dirtXArray[j], 520, 8, 10);
		ellipse(600 + dirtXArray2[j], 520, 8, 5);
	}

	/*
	fill('#5584A7');
	for(k=0; k<dirtSpotsXArray.length; k++) {
		ellipse(500 + dirtSpotsXArray[k], dirtSpotsYArray[k], 9, 4);
	}
	*/



	drawAstronaut(800 + 102, 22 +150 + 50*Math.sin(astroFloat), 0.15);

	drawBikeScene();

	noStroke();

	fill('#5584A7');
	for(k=0; k<dirtSpotsXArray.length; k++) {
		ellipse(550 + dirtSpotsXArray[k], dirtSpotsYArray[k], 9, 4);
	}

	drawBike(xDF + bikeChangePosition,yDF);
	drawPerson(xDF + bikeChangePosition,yDF);

	bikeChangePosition += 2;
	astroFloat += 0.001 * PI;

	if (bikeChangePosition > 1200) {
		bikeChangePosition = -300;
	}
	if (astroFloat === (2*PI)) {
		astroFloat = 0;;
	}
}





function drawBikeScene() {
	fill(128, 34, 57);
	noStroke();
	fill('#728B4C');//leaves&grass
	quad(0,520,0,600,600,600,600,520);//grass
	fill('white');//sidewalkcolor
	quad(0,550,0,590,600,590,600,550);//sidewalk
	fill('#EDE0E2');//treebark
	quad(40,530,50,530,50,390,40,390);//firsttree
	quad(160,530,170,530,170,390,160,390);//secondtree
	quad(280,530,290,530,290,390,280,390);//threetree
	rect(400, 390, 10, 140);
	fill('#728B4C');//leaves&grass

	ellipse(40,340,70,160);//firstbottree
	//triangle(10,110,68,93,10,5);//firsttoptree
	beginShape();
	curveVertex(94,380);
	curveVertex(68,290);
	curveVertex(44,252);
	curveVertex(18,223);
	curveVertex(9,210);
	curveVertex(4,205);
	curveVertex(5,212);
	curveVertex(8,290);
	curveVertex(9,340);
	curveVertex(8,390);
	endShape();
	ellipse(160,340,80,160);//secondbottree
	//triangle(125,110,195,93,110,20);//secondtoptree
	beginShape();
	curveVertex(230,350);
	curveVertex(190,290);
	curveVertex(166,252);
	curveVertex(145,223);
	curveVertex(133,210);
	curveVertex(120,205);
	curveVertex(118,212);
	curveVertex(123,290);
	curveVertex(127,340);
	curveVertex(135,390);
	endShape();
	ellipse(280,330,60,150);//thirdbottree
	//triangle(260,110,305,95,260,20);//thirdtoptree
	beginShape();
	curveVertex(330,360);
	curveVertex(305,287);
	curveVertex(292,263);
	curveVertex(265,225);
	curveVertex(250,212);
	curveVertex(244,207);
	curveVertex(244,214);
	curveVertex(248,292);
	curveVertex(255,342);
	curveVertex(260,392);
	endShape();
	ellipse(399,330,60,150);//fourthbottree
	triangle(380,295,400,275,395,215);//thirdtoptree
	//stroke('black');



	/*if (moveBike)
	{

		rwheel += 2;
		Lwheel += 2;
		Lwheelframe += 2;
		rwheelframe += 2;
		mconnectorframe += 2;
		LLwheelframe += 2;
		LRwheelframe += 2;
		BLTRframe += 2;
		TLBRframe += 2;
		Lhbar += 2;
		Mhbar += 2;
	 	Rhbar += 2;


	}*/


//treelines
	//first

	drawTreeDetails(0, 200);
	drawTreeDetails(120, 200);
	drawTreeDetails(240, 200);
	drawTreeDetails(360, 200);

	/*
	noStroke();
	drawBike(xDF + bikeChangePosition,yDF);
	drawPerson(xDF + bikeChangePosition,yDF);
	*/
}

function drawTreeTop(xPosition, yPosition) {

}

function drawTreeDetails(xPosition, yPosition) {
	stroke('black');
	line(40 + xPosition,230 + yPosition,45 + xPosition,230 + yPosition);//left
	line(40 + xPosition,235 + yPosition,45 + xPosition,235 + yPosition);
	line(45 + xPosition,240 + yPosition,50 + xPosition,240 + yPosition);//right
	line(45 + xPosition,245 + yPosition,50 + xPosition,245 + yPosition);
	line(40 + xPosition,250 + yPosition,45 + xPosition,250 + yPosition);
	line(45 + xPosition,255 + yPosition,50 + xPosition,255 + yPosition);
	line(40 + xPosition,260 + yPosition,45 + xPosition,260 + yPosition);
	line(40 + xPosition,265 + yPosition,45 + xPosition,265 + yPosition);
	line(40 + xPosition,270 + yPosition,45 + xPosition,270 + yPosition);
	line(40 + xPosition,275 + yPosition,45 + xPosition,275 + yPosition);
	line(45 + xPosition,280 + yPosition,50 + xPosition,280 + yPosition);
	line(45 + xPosition,285 + yPosition,50 + xPosition,285 + yPosition);
	line(40 + xPosition,290 + yPosition,45 + xPosition,290 + yPosition);
	line(45 + xPosition,295 + yPosition,50 + xPosition,295 + yPosition);
	line(40 + xPosition,300 + yPosition,45 + xPosition,300 + yPosition);
	line(40 + xPosition,305 + yPosition,45 + xPosition,305 + yPosition);
	line(45 + xPosition,310 + yPosition,50 + xPosition,310 + yPosition);
	line(45 + xPosition,315 + yPosition,50 + xPosition,315 + yPosition);
	line(40 + xPosition,320 + yPosition,45 + xPosition,320 + yPosition);
	line(45 + xPosition,325 + yPosition,50 + xPosition,325 + yPosition);
	line(40 + xPosition,330 + yPosition,45 + xPosition,330 + yPosition);
}

function drawBike(x,y)
{
	push();
	translate(x,y);
	//bike
	stroke('black');
	noFill();
	ellipse(10,245,30,30);
	//ellipse(260,365,30,30);//rightwheel
	ellipse(-40,245,30,30);
	//ellipse(210,365,30,30);//leftwheel
	stroke('#7090C2');//frame
	line(10,245,0,220);
	//line(260,365,250,340);//rightwheelframe
	line(-40,245,-30,220);
	//line(210,365,220,340);//leftwheelupperframe
	line(0,220,-30,220);
	//line(250,340,220,340);//middleconnectorframe
	line(-40,245,-20,250);
	//line(210,365,230,370);//leftwheellowerframe
	line(-20,250,0,220);
	//line(230,370,250,340);//lefttotoprightframe
	line(-30,220,-20,250);
	//line(220,340,230,370);//toplefttobottomleft
	stroke('purple');
	line(15,210,-5,210);
	//line(265,330,245,330);//middlehandlebars
	line(-5,210,0,215);
	//line(245,330,250,335);//lefthandlebar
	line(15,210,10,220);
	//line(265,330,260,340);//righthandlebar
	pop();
}

function drawPerson(x,y)
{
	push();
	translate(x, y);
	scale(scaleDF);
	//body

	fill('#6E4339');//skintone
	quad(5,210,10,210,0,185,-5,190);//rightarm
	//quad(255,330,260,330,250,305,240,300);
	quad(-10,173,15,173,10,183,0,182);
	//quad(240,293,265,293,260,303,250,302);//head
	quad(-10,205,-15,215,-5,215,-5,210);
	//quad(240,325,235,335,245,335,245,330);//upperleg
	quad(-15,215,-5,215,-8,225,-12,225);
	//quad(235,335,245,335,242,345,238,345);//lowerleg
	fill('#729475');//shirtcolor
	quad(0,185,-10,170,-30,195,-20,205);
	//quad(250,305,240,290,220,315,230,325);//shirt
	fill('purple');
	quad(-30,195,-10,205,-15,215,-30,210);
	//quad(220,315,240,325,235,335,220,330)//shortstop
	quad(-30,195,-25,240,-20,240,-20,200);
	//quad(220,315,225,360,230,360,230,320);//shortbot
	fill('white');
	quad(-8,225,-12,225,-12,235,-8,235);
	//quad(242,345,238,345,238,355,242,355);//rightsock
	quad(-25,240,-20,240,-20,245,-25,245);
	//quad(225,360,230,360,230,365,225,365);//leftsock
	ellipse(4,168,22,10);
	//ellipse(254,288,22,10);//hat
	rect(0,168,20,5);
	//rect(250,288,20,5);//hatbill
	fill('black');
	ellipse(-3,235,20,5);
	//ellipse(247,355,20,5);//rightshoe
	ellipse(-15,247,20,5);
	//ellipse(235,367,20,5);//leftshoe
	pop();
}

function mouseClicked()
{
	if(mouseX > 180 && mouseX < 290 && mouseY > 260 && mouseY < 395)
	{
		moveBike = true;

	}
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