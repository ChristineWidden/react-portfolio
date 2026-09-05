const Y_AXIS = 1;
const X_AXIS = 2;

let max_theta;
let max_a;
let max_b;
let a, b, h, k;
let loopCount;

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

    loopCount = 0;

    background(0);

    /*
    textFont(font);
    textSize(fontsize);
    textAlign(CENTER, CENTER);

     */
}





function draw() {
    let x, y, theta;


    //drawWords(a, b);

    //background(0);

    //drawWeirdThing(400, 400, 200, 200, 1, 1);


    let i, j;

    for (i = 0; i < 8; i++) {
        for (j = 0; j < 8; j++) {
            drawWeirdThingOneDot(100 * i + 50, 100 * j + 50, 49, 49, i + 1, j + 1);
            /*
            push();
                noFill();
                stroke(255);
                rect(200*i, 200*j, 200, 200);
            pop();

             */
        }
    }

    max_theta += 2*PI/300;


    /*
         for (theta = 0; theta < max_theta; theta += 2*PI/300) {
             x = 400 + h * Math.cos(a * theta);
             y = 400 + k * Math.sin(b * theta);

             ellipse(x, y, 3);
         }

        max_theta += 2*PI/300; //Creates an animation


     */
    if (max_theta >= 53) {
        max_theta = 0;
        background(0);
    }
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

function drawWeirdThing(xPos, yPos, h, k, n, d) {
    let x, y, theta;


    //drawWords(a, b);

    //background(0);

    for (theta = 0; theta < max_theta; theta += 2*PI/300) {
        x = xPos + h * Math.cos(n * theta/d) * Math.cos(theta);
        y = yPos + k * Math.cos(n * theta/d) * Math.sin(theta);

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

function drawWeirdThingOneDot(xPos, yPos, h, k, n, d) {
    let x, y, theta;


    //drawWords(a, b);

    //background(0);


    x = xPos + h * Math.cos(n * max_theta/d) * Math.cos(max_theta);
    y = yPos + k * Math.cos(n * max_theta/d) * Math.sin(max_theta);

    ellipse(x, y, 3);


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


function drawWords() {
    fill(255);
    text('a = ' + a, 10, 10);
    text('b = ' + b, 10, 30);
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

