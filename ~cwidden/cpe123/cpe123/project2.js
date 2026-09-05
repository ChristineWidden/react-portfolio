
var numScale=0.4;
var clicked = false;
var scaleH = 3;
var SideCanvas =400*scaleH;
var transBTAW = -SideCanvas/10;
var fx=780;
var fy=565;
var hrot = 0;
var i = 0;

//global color declarations
var colorBgPurple;
var colorFgPurple;
var colorCatOrange;
var colorCatYellow;
var colorCatPink;
var colorBlack;
var colorWhite;
var colorTrueBlack;

var unBlink = false;

let blinkCycle = 0;
let blinkHappening = 0;
let blinkRate = 0.2;
let blinkVary = 0;
let blackEyesRandom = 2;

let blackEyes = false;

let catX = 750;
let catY = 620;


function setup() {
	let canvas = createCanvas(SideCanvas, SideCanvas);
	frameRate(10);

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

function drawBackground() {
	//ground
	push();
	translate(0, 0);
	scale(scaleH);
	background(136, 207, 56);
	//sky
	noStroke();
	fill(48, 173, 219);
	beginShape();
	vertex(0,0);
	vertex(0, 201);
	vertex(7, 201);
	vertex(43, 189);
	vertex(84, 193);
	vertex(132, 212);
	vertex(170, 218);
	vertex(195, 204);
	vertex(234, 190);
	vertex(288, 177);
	vertex(327, 199);
	vertex(365, 200);
	vertex(400, 205);
	vertex(400, 0);
	vertex(0,0);
	endShape();
	pop();


}


function drawTree() {
	push();
	translate(transBTAW, SideCanvas/10);
	scale(scaleH);
	noStroke();
	fill(168, 102, 37);
	rect(150, 100, 50, 250);
	stroke(168, 102, 37);
	strokeWeight(10);
	line(196, 183, 243, 179);
	line(243, 179, 266, 169);
	line(156, 259, 115, 268);
	line(115, 268, 83, 268);
	noStroke();
	fill(20, 77, 44);
	ellipse(172, 72, 100, 100);
	ellipse(230, 107, 100, 100);
	ellipse(112, 104, 100, 100);
	ellipse(173, 123, 100, 100);
	ellipse(120, 31, 100, 100);
	ellipse(226, 31, 100, 100);
	ellipse(173, 6, 100, 100);
	pop();
}

function drawCover() {
	push();
	translate(transBTAW, SideCanvas/10);
	scale(scaleH);
	noStroke();
	fill(168, 102, 37);
	rect(150, 100, 50, 250);
	pop();
}

function drawSmallTree(transSTX, transSTY) {
	push();
	translate(transSTX, transSTY);
	scale(scaleH/2);
	noStroke();
	fill(168, 102, 37);
	rect(150, 100, 50, 250);
	fill(20, 77, 44);
	ellipse(172, 72, 100, 100);
	ellipse(230, 107, 100, 100);
	ellipse(112, 104, 100, 100);
	ellipse(173, 123, 100, 100);
	ellipse(120, 31, 100, 100);
	ellipse(226, 31, 100, 100);
	ellipse(173, 6, 100, 100);
	pop();

}

function drawHidebehind() {
	push();
	translate(transBTAW, SideCanvas/10);
	scale(scaleH);
	noStroke();
	fill(0);
	beginShape();
	vertex(87, 149);
	vertex(117, 173);
	vertex(150, 178);
	vertex(150, 256);
	vertex(120, 263);
	vertex(128, 269);
	vertex(110, 266);
	vertex(107, 278);
	vertex(97, 268);
	vertex(89, 282);
	vertex(86, 265);
	vertex(52, 214);
	vertex(78, 196);
	vertex(97, 177);
	vertex(76, 158);
	vertex(87, 149);
	endShape();

	beginShape();
	vertex(200, 226);
	vertex(226, 236);
	vertex(235, 187);
	vertex(240, 192);
	vertex(242, 175);
	vertex(260, 181);
	vertex(244, 164);
	vertex(212, 173);
	vertex(216, 187);
	vertex(200, 187);
	vertex(200, 226);
	endShape();

	beginShape();
	vertex(130, 269);
	vertex(150, 350);
	vertex(150, 264);
	vertex(130, 269);
	endShape();

	beginShape();
	vertex(90, 161);
	vertex(85, 121);
	vertex(34, 96);
	vertex(49, 127);
	vertex(43, 136);
	vertex(14, 136);
	vertex(48, 171);
	vertex(90, 161);
	endShape();

	stroke(255);
	strokeWeight(5);
	line(67, 139, 65, 123);
	line(57, 149, 41, 151);

	beginShape();
	noFill();
	strokeWeight(2);
	vertex(56, 160);
	vertex(72, 151);
	vertex(80, 151);
	vertex(76, 145);
	vertex(78, 134);
	vertex(82, 157);
	vertex(56, 160);
	endShape();
	pop();
}

function drawTail() {
	push();
	translate(transBTAW + 600, SideCanvas/10 + 850);
	rotate(hrot);
	scale(scaleH);
	translate(-200, -300);
	fill(0);
	beginShape();
	vertex(200, 240);
	vertex(244, 270);
	vertex(230, 293);
	vertex(241, 318);
	vertex(315, 325);
	vertex(303, 267);
	vertex(257, 245);
	vertex(240, 253);
	vertex(246, 225);
	vertex(328, 258);
	vertex(345, 350);
	vertex(230, 350);
	vertex(209, 332);
	vertex(200, 351);
	vertex(200, 240);
	endShape();
	pop();
}

function drawGrass() {
	push();
	translate(0, 0);
	scale(scaleH);
	//grass
	noStroke();
	fill(20, 77, 44);
	beginShape();
	vertex(0, 352);
	vertex(26, 315);
	vertex(48, 352);
	vertex(76, 317);
	vertex(71, 348);
	vertex(94, 335);
	vertex(123, 319);
	vertex(113, 340);
	vertex(123, 355);
	vertex(151, 328);
	vertex(169, 348);
	vertex(187, 313);
	vertex(197, 343);
	vertex(209, 331);
	vertex(221, 358);
	vertex(244, 335);
	vertex(258, 364);
	vertex(283, 336);
	vertex(296, 365);
	vertex(324, 332);
	vertex(346, 361);
	vertex(374, 312);
	vertex(388, 353);
	vertex(400, 334);
	vertex(400, 400);
	vertex(0, 400);
	vertex(0, 352);
	endShape();
	pop();
	pop();
}
function drawEdward(){
	push();
	translate(fx, fy);
	scale(numScale);
	strokeWeight(20);
	stroke(118, 75, 32);
		fill(255);
			rect(318, -5, 360, 478);
			line(487, 463, 428, 633);
			line(487, 463, 580, 633);
	pop();
	push();
	translate(fx, fy);
	scale(numScale);
		fill(0, 0, 0);
			line(376, 206, 411, 177);
			line(376, 206, 401, 196);
			line(401, 196, 407, 207);
			line(407, 207, 387, 222);
			line(400, 255, 387, 222);
			quad(441, 179, 449, 201, 457, 196, 459, 172);
			quad(459, 172, 459, 186, 486, 177, 472, 165);
			line(457, 196, 437, 206);
			line(437, 206, 440, 225);
			line(400, 255, 451, 220);
			triangle(410, 247.5, 441, 226.5, 438, 214);
			line(392, 236, 373, 332);
			line(374, 325, 343, 367);
			line(343, 367, 383, 382);
			line(501, 190, 522, 227);
			line(522, 227, 520, 264);
			line(510, 248, 566, 342);
			line(566, 342, 582, 422);
			line(383, 382, 446, 381);
			line(446, 381, 472, 385);
			line(532, 371, 472, 385);
			line(572, 443, 497, 305);
			line(532, 371, 542, 443);
			line(542, 443, 552, 449);
			line(552, 449, 552, 455);
			line(552, 455, 584, 460);
			line(584, 460, 604, 438);
			line(604, 438, 599, 427);
			line(582, 422, 599, 427);
			quad(383, 383, 392, 463, 446, 463, 446, 381);
			quad(446, 381, 446, 463, 472, 463, 472, 385);
			quad(472, 385, 472, 463, 534, 463, 510, 377);
			quad(415, 382, 420, 382, 424, 358, 419, 358);
			quad(424, 358, 431, 381, 436, 381, 429, 358);
			quad(419, 358, 429, 358, 437, 300, 427, 300);
			quad(437, 300, 427, 300, 444, 236, 454, 236);
			quad(444, 236, 454, 236, 493, 205, 484, 201);
			quad(493, 205, 484, 201, 506, 198, 509, 204);
		fill(255, 255, 255);
			quad(459, 186, 509, 171, 512, 189, 463, 203);
//face
  	fill(255, 255, 255);
  		ellipse(436, 111, 110, 150);
//hair
  	fill(0, 0, 0);
  		quad(381, 101, 485, 80, 491, 33, 379, 31);
  		triangle(399, 97, 395, 109, 415, 92);
  		triangle(415, 92, 417, 102, 423, 91);
  		triangle(380, 98, 370, 114, 381, 88);
  		triangle(381, 88, 367, 102, 380, 79);
		triangle(380, 79, 365, 86, 380, 65);
		triangle(346, 83, 380, 65, 380, 54);
		triangle(380, 54, 336, 78, 379, 48);
		triangle(379, 48, 346, 63, 380, 42);
		triangle(380, 42, 333, 44, 379, 35);
		triangle(333, 44, 330, 51, 370, 42);
		triangle(379, 35, 358, 24, 385, 30);
		triangle(442, 31, 388, 13, 460, 32);
		triangle(460, 32, 445, 13, 472, 32);
		triangle(472, 32, 465, 8, 481, 33);
		triangle(481, 33, 485, 19, 490, 32);
		quad(443, 102, 449, 103, 450, 83, 439, 86);
		quad(448, 83, 458, 108, 481, 103, 485, 70);
		triangle(490, 32, 481, 108, 497, 108);
		triangle(481, 108, 488, 137, 497, 108);
		triangle(490, 32, 489, 42, 500, 43);
		quad(489, 42, 500, 43, 518, 54, 489, 54);
		quad(489, 54, 502, 54, 526, 67, 491, 67);
		quad(491, 67, 505, 67, 503, 80, 490, 80)
		triangle(505, 67, 503, 80, 521, 74);
		quad(490, 80, 520, 80, 505, 88, 490, 88);
		quad(490, 88, 505, 88, 520, 94, 494, 95);
		triangle(494, 95, 511, 97, 494, 102);
		triangle(494, 102, 494, 108, 508, 101);
		triangle(494, 108, 509, 112, 494, 111);
		triangle(494, 111, 504, 115, 490, 120);
		triangle(490, 120, 497, 121, 491, 125);
		triangle(491, 125, 500, 129, 487, 129);
		triangle(487, 129, 488, 137, 498, 139);
  	fill(255, 255, 255);
  		arc(434, 94, 23, 26, PI, 9*PI/4);
  		arc(469, 108.5, 25, 30, PI, 0);
  	fill(0, 0, 0);
  		triangle(443, 102, 455, 139, 449, 103);
  		pop();
}

function transHand()
{
	if(mouseX>1008 && mouseX<1047 && mouseY>720 && mouseY<742)
{		drawDogeFace(
			956, 
			621, 
			color(random(255),random(255),random(255)),
			0.2,
			color(random(255),random(255),random(255))
)
		//scissorhand
			push();
			translate(fx, fy);
			scale(numScale);
			fill(0, 0, 0);
			quad(582, 422, 580, 409, 586, 405, 588, 424);
			triangle(588, 423, 583, 391, 608, 343);
			quad(588, 423, 591, 408, 603, 401, 599, 427);
			quad(608, 343, 610, 318, 614, 327, 615, 430);
			quad(608, 343, 600, 369, 604, 438, 615, 430);
			triangle(604, 438, 599, 427, 602, 404);
			triangle(612, 354, 632, 305, 612, 384);
			triangle(612, 384, 615, 430, 618, 360);
			quad(615, 430, 614, 408, 630, 384, 634, 394);
			triangle(634, 394, 630, 384, 659, 354);
			triangle(615, 430, 630, 398, 647, 394);
			pop();
}
	else {
		//hand
			push();
			translate(fx, fy);
			scale(numScale);
			noStroke();
			fill(250, 207, 200);
			quad(582, 422, 605, 408, 612, 412, 606, 422);
			arc(606, 423, 30, 30, 3*PI/2, 7*PI/4);
			quad(582, 422, 634, 422, 634, 427, 599, 427);
			quad(599, 427, 604, 438, 639, 438, 634, 427);
			quad(629, 436, 640, 404, 648, 404, 639, 438);
			quad(639, 426, 651, 417, 656, 426, 639, 438);
			quad(656, 426, 651, 417, 654, 396, 660, 395);
			quad(650, 406, 636, 424, 652, 420, 654, 407);
			quad(655, 399, 663, 400, 656, 430, 644, 428);
			triangle(644, 428, 656, 430, 642, 433);
			pop();		
	}
}

function drawDogeFace(fx, fy, colorDoge1, scaleDoge, colorDoge2) {
	push();
	translate(fx, fy);
	scale(scaleDoge)
	fill(255);
	ellipse(-65, -40, 60, 40);
	ellipse(40, -40, 70, 40);
	fill(colorDoge1);
	ellipse(-56, -40, 40, 37);
	fill(colorDoge2);
	ellipse(50, -40, 50, 37);
	line(-30, 35, -30, 50);
	fill(0)
	ellipse(-30, 10, 50);
	arc(-25, 50, 100, 10, 0, PI);
	triangle(-40, 50, 0, 50, -30, 45);	
	fill(255);
	ellipse(-60, -50, 10);
	ellipse(40, -50, 10, 10);
	pop();
}

function mousePressed() {
	if (mouseX > 0 && mouseY > 190){
		if (clicked == false) {
			clicked = true 
		}
		else {
			clicked = false
		}
	}
}

function draw()
{
	drawBackground();

	drawGarfield(catX, catY, 0.2);

	drawSmallTree(-50, SideCanvas/12);
	drawSmallTree(-160, SideCanvas/6);
	drawSmallTree(0.85*SideCanvas/3, SideCanvas/12);
	drawSmallTree(1.2*SideCanvas/3, SideCanvas/6);
	drawSmallTree(1.6*SideCanvas/3, SideCanvas/6);
	drawSmallTree(2.1*SideCanvas/3, SideCanvas/7);
	drawTree();
	if (clicked === true) {
		drawHidebehind();
		drawTail(hrot);
		if(i<10){
			hrot = hrot - PI/360;
			i = i+1 }
		if(i>=10 && i<20){
			hrot = hrot + PI/360;
			i = i+1;
		}
		if(i>=20){
			i=0
		}
		
	}
	drawCover();
	drawGrass();
	drawEdward();
	transHand();








	blinkHappening += blinkRate;

	if (blinkHappening <= 2) {
		if (unBlink) {
			blinkCycle -= blinkRate;
		} else {
			blinkCycle += blinkRate;
		}

		if (blinkCycle >= 0.9) {
			unBlink = true;
		} else if (blinkCycle <= 0) {
			unBlink = false;
		}
	} else if (blinkHappening > 200 + blinkVary) {
		blinkHappening = 0;
		blinkVary = random(-120, 100);

	} else {
		unBlink = 0;
	}
}




let xBounding;
let yBounding;


function drawGarfield(x, y, scaleDegree) {
	//x = x - 155;
	//y = y - 340;

	push();
	translate((1-scaleDegree) * x, (1 - scaleDegree) * y);
	scale(scaleDegree);
	translate(-155, -340);

	xBounding = x + scaleDegree * 500;
	yBounding = y + scaleDegree * 400;

	drawLayer1(x, y, 1);
	drawLayer2(x, y, 1);
	drawLayer3(x, y, 1);
	drawLayer4(x, y, 1);
	drawLayer5(x, y, 1);
	drawLayer6(x, y, 1);
	drawLayer7(x, y, 1);

	pop();
}


/**
 * Draws tail and bottom front foot
 */
function drawLayer1(x, y, scaleDegree) {
	push();
	translate(x, y);
	scale(scaleDegree);

	fill(colorCatOrange);
	strokeWeight(3);
	stroke(colorBlack);

	ellipse(245, 679, 174, 109); //bottom tail
	ellipse(580, 673, 108, 49); //bottom front foot
	pop();
}

/**
 * Draws body and thigh
 */
function drawLayer2(x, y, scaleDegree) {
	push();
	translate(x, y);
	scale(scaleDegree);

	fill(colorCatOrange);
	strokeWeight(3);
	stroke(colorBlack);

	ellipse(436, 599, 317, 295); //body
	ellipse(308, 655, 193,185); //top large back thigh

	pop();
}

/**
 * Draws top tail, top feet, head
 */
function drawLayer3(x, y, scaleDegree) {
	push();
	translate(x, y);
	scale(scaleDegree);

	fill(colorCatOrange);
	strokeWeight(3);
	stroke(colorBlack);

	ellipse(232, 714, 152, 78); //top tail
	ellipse(395, 736, 124, 56); //top back foot
	ellipse(541, 733, 116, 56); //top front foot
	ellipse(558, 471, 242, 196); //garf head
	pop();
}



/**
 * Draws cheeks and whites of eyes
 */
function drawLayer4(x, y, scaleDegree) {
	push();
	translate(x, y);
	scale(scaleDegree);

	fill(colorCatYellow);
	strokeWeight(3);
	stroke(colorBlack);

	ellipse(487, 490, 53, 52);//left cheek
	ellipse(637, 489, 53, 52);//right cheek

	ellipse(528, 492, 71, 36);//left lower cheek
	ellipse(600, 492, 72, 37);//right lower cheek





	if (blackEyes) {
		fill(colorBlack);
	} else {
		fill(colorWhite);
	}

	/*
	if (blackEyesRandom > 2) {
		fill(colorWhite);
	} else {
		fill(colorBlack);
		//blinkHappening += blinkRate * 2;
	}

	 */

	strokeWeight(3);
	stroke(colorBlack);

	ellipse(524, 445, 79, 96);//left eye
	ellipse(603, 446, 79, 96);//right eye
	pop();
}

function mouseClicked() {
	if (mouseX > catX && mouseY > catY && mouseX < xBounding && mouseY < yBounding) {
		blackEyes = !blackEyes;
	}
}

/**
 * Draws ears
 */
function drawLayer5(x, y, scaleDegree) {
	push();
	translate(x, y);
	scale(scaleDegree);

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


	pop();
}

/**
 * Draws nose, pupils, eyelids
 */
function drawLayer6(x, y, scaleDegree) {
	push();
	translate(x, y);
	scale(scaleDegree);


	strokeWeight(3);
	stroke(colorBlack);




	fill(colorBlack);
	noStroke();

	ellipse(525, 448, 20, 27); //left pupil

	ellipse(603, 448, 20, 27); //right pupil

	fill(colorCatOrange);
	strokeWeight(3);
	stroke(colorBlack);


	arc(524, 445, 79, 96, PI - blinkCycle * (PI / 2), blinkCycle * (PI / 2), CHORD);//left eyelid
	arc(603, 446, 79, 96, PI - blinkCycle * (PI / 2),  blinkCycle * (PI / 2), CHORD);//right eyelid

	//arc(603, 446, 79, 96, PI, 0, PIE);//right eyelid

	fill(colorCatPink);
	ellipse(564, 478, 38, 30); //nose
	pop();
}

/**
 * Draws those good good stripes
 */
function drawLayer7(x, y, scaleDegree) {
	push();
	translate(x, y);
	scale(scaleDegree);

	fill(colorBlack);
	noStroke();

	triangle(194, 710, 170, 729,  196, 740);//tail stripe 1
	triangle(223, 720, 208, 745, 236, 748);//tail stripe 2
	triangle(258, 716, 251, 746, 278, 739);//tail stripe 3

	triangle(250, 595, 227, 625, 276, 639);//leg stripe 1
	triangle(286, 575, 311, 619, 324, 571);//leg stripe 2

	triangle(340, 494, 301, 535, 368, 557); //back stripe 1
	triangle(367, 476, 412, 524, 420, 458);//back stripe 2
	pop();
}