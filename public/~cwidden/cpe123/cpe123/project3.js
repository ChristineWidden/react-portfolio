//let max_theta;
let max_a;
let max_b;
let a, b, h, k;
let loopCount;

//color declarations
let colorOldParchment;
let colorFadedBlueTile;
let colorBrickPath;
let colorAntiqueSapphire;
let colorPaleSkin;
let colorWinterLeaf;

let circleDensity;
let circleSize;
let circleSizeVary;
let colorVary;

let maxPetals;
let max_theta;

let spiralXArray = [];
let spiralYArray = [];
let spiralPetalsArray = [];
let spiralPetalSizeArray = [];

let roseXArray = [];
let roseYArray = [];



function setup() {

    let canvas = createCanvas(600, 600);
    canvas.parent('sketchHolder');

    fill(255);
    noStroke();

    //max_theta = 0;
    //max_theta = 10*PI;
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

    colorAntiqueSapphire = color(84, 147, 209);
    colorBrickPath = color(105, 75, 39);
    colorFadedBlueTile = color(153, 209, 225);
    colorPaleSkin = color(249, 214, 162);
    colorOldParchment = color(248, 240, 188);
    colorWinterLeaf = color(135, 191, 125);

    loopCount = 0;

    maxPetals = 0;
    max_theta = 0;

    background(0);

    /*
    textFont(font);
    textSize(fontsize);
    textAlign(CENTER, CENTER);

     */

    for (let i = 0; i < 10; i++) {
        let spiralPosition = PI * (Math.random() + 1.25);
        //fill(0);
        spiralXArray[i] = 350 + 125 * cos(spiralPosition);
        spiralYArray[i] = 325 + 125 * sin(spiralPosition);
        spiralPetalsArray[i] = 60 + random(-20, 80);
        spiralPetalSizeArray[i] = random(1,5);
    }

    for (let i = 0; i<100; i++) {
        roseXArray[i] = random(0, width);
        roseYArray[i] = random(0, height);
    }
}





function draw() {

    let horizontalMargins = 50;
    let variedColor;

    background(colorFadedBlueTile);
    noStroke();

    fill(colorOldParchment);
    ellipse(width/2, height/2, 560);
    rect(0, 0, 50, height);
    rect(width-horizontalMargins, 0, horizontalMargins, height);

    fill(colorBrickPath);
    ellipse(width/2, height/2, 500);

    fill(colorWinterLeaf);
    for (let i = 0; i<50; i++) {
        let size = random(30, 50);
        drawWeirdThingNoAnimation(roseXArray[i], roseYArray[i], size, size, 4, 1, 2*PI);
    }



    for (let i = 0; i < width; i+= circleDensity) {
        for (let j = 0; j < height; j+= circleDensity) {
            if (i > horizontalMargins && i < width-horizontalMargins && implicitCircleTotal(i, j, width/2, height/2, 280) > 0) {
                variedColor = varyColorAll(colorFadedBlueTile, 10);
                fill(variedColor.red, variedColor.blue, variedColor.green);
                //fill(colorFadedBlueTile);
                ellipse(i, j, circleSize + random(circleSizeVary * -1, circleSizeVary));
            }
            if(implicitCircleTotal(i, j, width/2, height/2, 250) < 0) {
                variedColor = varyColorAll(colorBrickPath, 20);
                fill(variedColor.red, variedColor.green, variedColor.blue);
                ellipse(i, j, circleSize + random(circleSizeVary * -1, circleSizeVary));
            }
        }
    }


    fill(colorOldParchment);
    drawWeirdThing(width/2, height/2, 240, 240, 8, 5);

    max_theta += PI/100;

    if (max_theta > 13*PI){
        max_theta = 0;
    }


    fill(colorPaleSkin);
    ellipse(350, 325, 250); //radius 125 //skull
    rect(225, 325, 125, 125);//chin
    rect(340, 325, 100, 300);//neck
    ellipse(370, 650, 300);//chest
    triangle(225, 325, 225, 375, 200, 375);//nose

    fill(colorAntiqueSapphire);
    arc(350, 325, 250, 250, 1.25 * PI, 0.25 * PI, CHORD);

    for (let i = 0; i < 10; i++) {
        drawReverseSpiral(spiralXArray[i], spiralYArray[i], spiralPetalsArray[i], spiralPetalSizeArray[i], 0.4, 0.1);
    }
    //drawReverseSpiral(300, 300, 120, 3, 0.4, 0.1);

    //noLoop();

    maxPetals++;
}

function drawSpiral(x, y, petals, petalSize, tightness, rotationAngle) {
    //drawStem(x, y);

    push();

    colorMode(HSB, 255);

    translate(x, y);

    for (var i = petals-1; i >= 0; i--) {
        //fill(hue, 200 * (i/petals) + 55, 200);
        //fill(0);
        rotate(rotationAngle);
        ellipse(i * tightness, 0, petalSize * (1 + i/10), petalSize * (1 + i/10));
        //x += 1;
    }

    pop();
}

function drawReverseSpiral(x, y, petals, petalSize, tightness, rotationAngle) {
    //drawStem(x, y);

    push();

    colorMode(HSB, 255);

    translate(x, y);

    let petalStop;

    if (petals - 1 < maxPetals) {
        petalStop = petals  - 1;
    } else {
        petalStop = maxPetals;
    }

    for (var i = 0; i <= petalStop; i++) {
        //fill(hue, 200 * (i/petals) + 55, 200);
        //fill(0);
        rotate(rotationAngle);
        ellipse(i * tightness, 0, petalSize * (1 + i/10), petalSize * (1 + i/10));
        //x += 1;
    }

    pop();
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

function drawWeirdThing(xPos, yPos, h, k, n, d) {
    let x, y, theta;


    //drawWords(a, b);

    //background(0);

    for (theta = 0; theta < max_theta; theta += 2*PI/600) {
        x = xPos + h * Math.cos(n * theta/d) * Math.cos(theta);
        y = yPos + k * Math.cos(n * theta/d) * Math.sin(theta);

        ellipse(x, y, 10);
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

function drawWeirdThingNoAnimation(xPos, yPos, h, k, n, d, maxTheta) {
    let x, y, theta;


    //drawWords(a, b);

    //background(0);

    for (theta = 0; theta < maxTheta; theta += 2*PI/600) {
        x = xPos + h * Math.cos(n * theta/d) * Math.cos(theta);
        y = yPos + k * Math.cos(n * theta/d) * Math.sin(theta);

        ellipse(x, y, 2);
    }

}

function varyColorAll(color, vary) {
    return varyColor(color, vary, vary, vary);
}

function varyColor(color, varyRed, varyGreen, varyBlue) {
    let valueRed = red(color);
    let valueGreen = green(color);
    let valueBlue = blue(color);

    let newRed = valueRed + random(-varyRed, varyRed);
    let newGreen = valueGreen + random(varyGreen, varyGreen);
    let newBlue = valueBlue + random(-varyBlue, varyBlue);

    //let newColor = {red:newRed, green:newGreen, blue:newBlue};
    //return newColor;
    return {red:newRed, green:newGreen, blue:newBlue};
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


/**
 *  If the total with a point (x,y) is less than zero, that point is within the circle.
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
 * If the total with a point (x,y) is less than zero, that point is above the line.
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


