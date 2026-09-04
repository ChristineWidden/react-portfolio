const Y_AXIS = 1;
const X_AXIS = 2;

let max_theta;
let max_a;
let max_b;
let a, b, h, k;

let circleDensity;
let circleSize;
let circleSizeVary;
let colorVary;

let font, fontsize;
fontsize = 10;

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

	circleDensity = 7;
	circleSize = 12;
	circleSizeVary = 3;
	colorVary = 20;

	/*
	textFont(font);
	textSize(fontsize);
	textAlign(CENTER, CENTER);

	 */
}





function draw() {
	background(0);

	fill(255);
	noStroke();

	for (let i = 0; i < width; i+= circleDensity) {
		for (let j = 0; j < height; j+= circleDensity) {
			if (implicitCircleTotal(i, j, 400, 300, 100) < 0) {
				fill(255, 108 + random(-colorVary, colorVary), 38);
				ellipse(i, j, circleSize + random(circleSizeVary * -1, circleSizeVary));
			} else if(implicitLineTotal(i, j, 0, height * 0.8, width, height*0.8) >= 0) {
				fill(0, 114 + random(-colorVary, colorVary), 227 + random(-colorVary, colorVary));
				ellipse(i, j, circleSize + random(circleSizeVary * -1, circleSizeVary));
			}else if(implicitLineTotal(i, j, 0, height * 0.8, width, height*0.8) <= 0) {
				if (random(0,100) > 99){
					fill(255);
				} else{
					fill(121 + random(-colorVary, colorVary), 0, 255);
				}
				ellipse(i, j, circleSize + random(circleSizeVary * -1, circleSizeVary));
			}
			if (implicitLineTotal(i, j, 0, height * 0.85, width, height*0.9) >= 0) {
				fill(0, 96 + random(-colorVary, colorVary), 207 + random(-colorVary, colorVary));
				ellipse(i, j, circleSize + random(circleSizeVary * -1, circleSizeVary));
			}
			if (implicitLineTotal(i, j, 0, height * 0.95, width, height*0.93) >= 0) {
				fill(0, 76 + random(-colorVary, colorVary), 187 + random(-colorVary, colorVary));
				ellipse(i, j, circleSize + random(circleSizeVary * -1, circleSizeVary));
			}
		}
	}

	noLoop();
}


function drawWeirdThing(xPos, yPos, h, k, a, b) {
	let x, y, theta;


	//drawWords(a, b);

	//background(0);

	for (theta = 0; theta < max_theta; theta += 2*PI/300) {
		x = xPos + h * Math.cos(a * theta);
		y = yPos + k * Math.sin(b * theta);

		ellipse(x, y, 3);
	}

	 //Creates an animation

	/*
	if (max_theta >= 2*PI) {
		max_theta = 0;
		a++;

		if (a > max_a) {
			a = 1;
			b++;
			if (b > max_b) {
				b = 1;
			}
		}

	}
	 */

}

/**
 *
 * @param x X position to be evaluated
 * @param y Y position to be evaluated
 * @param x0 x coordinate of first defining point of line
 * @param x1 x coordinate of second defining point of line
 * @param y0 y coordinate of first defining point of line
 * @param y1 y coordinate of second defining point of line
 */
function implicitLineTotal(x, y, x0, y0, x1, y1) {
	return (y0 -y1)*x + (x1-x0)*y + x0*y1 - x1*y0;
}

/**
 *
 * @param x X position to be evaluated
 * @param y Y position to be evaluated
 * @param cx Circle X position
 * @param cy Circle Y position
 * @param r Circle radius
 */
function implicitCircleTotal(x, y, cx, cy, r) {
	return (pow(x-cx, 2) + pow(y-cy, 2) - pow(r, 2));
}