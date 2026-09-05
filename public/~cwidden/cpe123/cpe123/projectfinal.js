var numBC;
var dx = [];
var dy = [];
var bcX = [];
var bcY = [];
var bcScale = [];
var bcColor = [];
var cy = 0;
var clX = [];
var clRot = [];
var clColor = [];

function bcUpdate()
{
   for (var i=0; i < numBC; i++) 
   {
   bcX[i] += dx[i];
   bcY[i] += dy[i];
   if (bcX[i] >= width || bcX[i] <= 0) 
         dx[i] = -dx[i];
   if (bcY[i] <= 0 || bcY[i] >= height) 
         dy[i] = -dy[i];
   }
}

function drawVenus()
{
   noStroke();
   fill(217, 140, 113);
   rect(0, 0, width, height);
   fill(242, 226, 196);
   rect(0, 0, 400, 150);
   fill(95, 95, 99);
   triangle(180, 150, 380, 150, 200, 400);
   fill(229, 235, 234);
   triangle(50, 125, 180, 150, 200, 400);
   triangle(250, 125, 380, 150, 200, 400);
   fill(0, 0, 0, 50);
   rect(12, 0, 375, 100);
   fill(255);
   rect(25, 0, 10, 100);
   rect(365, 0, 10, 100);
   rect(125, 0, 10, 100);
   rect(265, 0, 10, 100);
   ellipse(200, 0, 100);
   fill(255, 255, 255, 50);
   triangle(200, 0, 0, 400, 400, 400);   
   for (var i=0; i < clX.length; i++)
   {
      drawBaseCloud(clX[i], clRot[i], clColor[i]);
   }

   for (var i=0; i < numBC; i++) 
   {
      drawClouds(bcX[i], bcY[i], dx[i], dy[i], bcScale[i], bcColor[i]);
   }
      bcUpdate();
}

function drawClouds(x, y, dx, dy, sc, c)
{
   push();
      translate(x, y);
      rotate(atan2(dy, dx)+PI/2);
      scale(sc);
      fill(c);
      ellipse(141, 70, 200, 200);
      ellipse(141, -120, 200, 200);
      ellipse(100, -10, 250, 250);
   pop();
}

function drawBaseCloud(x, rot, c)
{
   fill(c);
   push();
      translate(x, 150);
      rotate(rot);
      ellipse(-25, -25, 80, 80);
      ellipse(-25, 25, 50, 50);
      ellipse(-50, -25, 80, 80);
      ellipse(-50, 25, 80, 80);
      ellipse(15, 25, 50, 50);
      ellipse(15, -25, 50, 50);
   pop();
   fill(c, 50);
   push();
      translate(x, 450);
      rotate(rot);
      ellipse(-25, -25, 80, 80);
      ellipse(-25, 25, 50, 50);
      ellipse(-50, -25, 80, 80);
      ellipse(-50, 25, 80, 80);
      ellipse(15, 25, 50, 50);
      ellipse(15, -25, 50, 50);
   pop();
}

//drawEarth
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

function earthSetup() {
   earthRunning = true;

   //document.getElementById("earthInstructions").removeAttribute("hidden");
   document.getElementById("earthInstructions").style.display = "inline";
   frame = 0;

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
         if (buildingObject.hasLightsArray[i]) {
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

//drawMars
var loc, dir
var headR, armRight, armLeft, legLeft, legRight

var headDown = true

var legRightDown = true
var legLeftDown = true

var armRightDown = true
var armLeftDown = true

var anchor = 320
var treeTrunkX = []
var treeTrunkWidth = []
var treeTrunkLength = []
var treeTrunkColor = []

function drawAlien(x,y) {
  push()
    translate(x,y)

    fill('white')
    rect(0,0, 20,40 ,10)

    //head
    fill('green')
    push()
      translate(10,0)
      rotate(headR)
      ellipse(3,0,30,22)
    pop()

    //arms
    fill('white')
    push()
      translate(3,12)
      rotate(armLeft)
      rect(0,0,5,34)
    pop()
    push()
      translate(13,15)
      rotate(armRight)
      rect(0,0,5,33)
    pop()

    //legs
    push()
      translate(3,27)
      rotate(legLeft)
      rect(0,0,5,33)
    pop()
    push()
      translate(13,30)
      rotate(legRight)
      rect(0,0,5,33)
    pop()

  pop()
}
function moveAlien(){

   loc.add(dir);

   if (headR < -PI/8){
      headDown = false;
   }
   if (headR > PI/10){
      headDown = true;
   }
   if (headDown == true) {
      headR -= PI/100;
   }
   else{
      headR += PI/100;
    }

    if (armRight < -PI/4){
      armRightDown = false
    }
    if (armRight > PI/4){

      armRightDown = true
    }
    if (armRightDown == true) {
       armRight -= PI/100
    }
    else{
       armRight += PI/100
    }
    if (legRight < -PI/8){
       legRightDown = false
    }
    if (legRight > PI/8){
       legRightDown = true
    }
    if (legRightDown == true) {
       legRight -= PI/120
    }
    else{
      legRight += PI/120
    }

    if (armLeft < -PI/4){
       armLeftDown = true
    }
    if (armLeft > PI/4){
       armLeftDown = false
    }
    if (armLeftDown == true) {
       armLeft += PI/100
    }
    else{
       armLeft -= PI/100
    }

    if (legLeft < -PI/8){
       legLeftDown = true
    }
    if (legLeft > PI/8){
       legLeftDown = false
    }
    if (legLeftDown == true) {
       legLeft += PI/120
    }
    else{
      legLeft -= PI/120
    }
    if (loc.x > width){
      drawSolarSystem = true
      drawMars = false
      loc.x = 100;
    }
 }
function mountains() {
  fill('#D15F19')
  rect(0,300, width, 100)
  fill('#CF5230')
  triangle(-40,300, 50,160, 400,300)
  triangle(200,250, 320, 150, 410, 305)
  triangle(180,220, 200, 150, 420, 305)

}

function runTrees() {
  var i = 0
  while(i < 18) {
    drawTree(treeTrunkX[i] , anchor - treeTrunkLength[i] , treeTrunkWidth[i] , treeTrunkLength[i], treeTrunkColor[i])
    i++
  }
}

function drawTree(treeTrunkX, anchor, treeTrunkWidth, treeTrunkLength, treeTrunkColor) {
  push()
    translate(treeTrunkX, anchor)
    noStroke()
    fill('brown')
    rect(0, 0, treeTrunkWidth, treeTrunkLength)
    fill(0,treeTrunkColor,0)
    triangle(treeTrunkWidth-30, 10, treeTrunkWidth + 15, 10, 7, -30)

    if (treeTrunkLength > 30) {
      triangle(treeTrunkWidth-30, 30, treeTrunkWidth + 15, 30, 7, -20)
    }
    if (treeTrunkLength > 80) {
      triangle(treeTrunkWidth-30, 50, treeTrunkWidth + 15, 50, 7, -10)
    }
    if (treeTrunkLength > 110) {
      triangle(treeTrunkWidth-30, 70, treeTrunkWidth + 15, 70, 7, 0)
    }
  pop()
}

//drawAsteroid
var craters = [];
var craterColor = [];
var fillAsteroid = [];
var asteroidB = [];
var asteroidC = [];
var craterB = [];
var craterC = [];
var star = [];
var numCraters,asteroidD, manLoc, legDirection, takeOff, walk, spaceShipLoc, spaceShipVel, spaceShipAcc, spaceShipJer, asteroidBelt;

function distance(initX, initY, finX, finY){
   return sqrt(pow(finX - initX, 2) + pow(finY - initY, 2));
}

function stars(){
   for(var i = 0; i < 60; i++){
      fill(255);
      var d = distance(width / 2, height / 2, star[i].x, star[i].y) / 100;
      ellipse(star[i].x, star[i].y, d);
      star[i].x += .4;
      if(star[i].x > 400){
         star[i].x = 0;
      }
   }
}

function asteroid(){
   noStroke();
   push();
      translate(width / 2, height / 2);
      rotate();
      for(var i = 0; i < pow(asteroidD, 2) / 4; i++){
         if(asteroidB[i] == true){
            fill(asteroidC[i]);
            ellipse(fillAsteroid[i].x, fillAsteroid[i].y, 10);
         }
      }
      
      for(var i = 0; i < numCraters; i++){
         fill(craterColor[i], craterColor[i], craterColor[i]);
         if(craterB[i]){
            ellipse(craters[i].x, craters[i].y, 10);
         }
      }

   pop();
}

function spaceShip(){
   noStroke();
   push();
      translate(spaceShipLoc.x, spaceShipLoc.y);
      if(takeOff && spaceShipAcc.y + .1 < -1 * spaceShipAcc.x){
         rotate(atan2(spaceShipVel.y, spaceShipVel.x) + PI / 2);
         fill(0, 230, 250);
         triangle(-4, 19, 4, 19, 0, 35);
      }else{
         rotate(PI / 4);
      }
      fill(127);
      ellipse(0, 0, 15, 40);
      fill(155, 70, 0);
      triangle(0, 9, -7, 9, -9, 25);
      triangle(0, 9, 7, 9, 9, 25);
      fill(0);
      ellipse(0, -10, 5);
   pop();

   if(takeOff){
      spaceShipLoc.add(spaceShipVel);
      spaceShipVel.add(spaceShipAcc);
      spaceShipAcc.add(spaceShipJer);
   }

   if(spaceShipLoc.y < -45){
      asteroidBelt = false;
      drawSolarSystem = true;
      takeOff = false;
      walk = false;
      spaceShipLoc = createVector(280, 120);
      spaceShipVel = createVector(0, 0);
      spaceShipAcc = createVector(.1, -.05);
      spaceShipJer = createVector(0, -.02);
      manLoc = createVector(250, 150); 
   }

}

function spaceMan(){
   if(takeOff == false){
      push();
         translate(manLoc.x, manLoc.y);
         rotate(-PI / 4);
         fill(50);
         ellipse(0, 0, 3, 10);
         ellipse(1, -6, 4);

         stroke(155, 70, 0);
         line(-1, -2, -1, 2);
         noStroke();
         
         push();
            translate(0, 5);
            rotate(leg);
            translate(0, 3);
            fill(155, 70, 0);
            ellipse(0, 0, 2, 9);

         pop();

         push();
            translate(0, 5);
            rotate(-leg);
            translate(0, 3);
            fill(155, 70, 0);
            ellipse(0, 0, 2, 9);

         pop();

      pop();

      if(walk){
         if(leg > 0 && legDirection == true){
            leg -= PI / 40;
         }
         if(leg == 0 || leg == PI / 4){
            legDirection = !legDirection;
         }
         if(legDirection == false){
            leg += PI / 40;
         }
         manLoc.x += .5;
         manLoc.y -= .5;

         if(manLoc.x > 270 && manLoc.y < 130){
            walk = false;
            takeOff = true;
         }
      }
   }
}

function drawAsteroidBelt(){
   background('#121212');
   stars();
   asteroid();
   spaceShip();
   spaceMan();
}

function drawAst(){
   fill(random(230, 250))
   ellipse(210, 250, 10)
}

function Particle(x , y) {
    this.velX = random(-2,2);
    this.velY = random(-2,2);
    this.locX = x;
    this.locY = y;
    this.r = random(7,12);
    this.life = 200;
  this.updateP = function() {
    this.velX += random(-.01, .01);
    this.velY += random(-.01, .01);
    this.locX += this.velX;
    this.locY += this.velY;
    this.life -=  1.0;
  };
  
  this.renderP = function() {
    noStroke();
    push();
      ellipseMode(CENTER);
      fill(255, 255, 255, this.life);
      translate(this.locX, this.locY);
      ellipse(0, 0, this.r/2);
      fill(255, this.life/5);
      ellipse(0, 0, this.r);
    pop();
  };
}

function PSys(sX, sY, num){
    this.particles = [];
    for (var i=0; i < num; i++) {
      this.particles.push(new Particle(sX+random(-100,100), sY+random(-100,100)));
    }
  
    this.run = function() {
      for (var i=this.particles.length-1; i >= 0; i--) {
        this.particles[i].updateP();
        this.particles[i].renderP();
        if (this.particles[i].life <= 0 || 
            this.particles[i].locX < 0 ||
            this.particles[i].locX > width ||
            this.particles[i].locY < 0 ||
            this.particles[i].locY > height)
        {
           this.particles.splice(i,1);
           this.particles.push(new Particle(sX+random(-100,100), sY+random(-100,100)));
        }
      }
    }  
}

function drawplantes()
{  
   fill('#fbc00c');
   ellipse(-340, 200, 800);
   fill('#d5d2d1');
   ellipse(100, 200, 5);
   fill('#8B7D82');
   ellipse(125, 200, 10);
   fill('#6b93d6');
   ellipse(170, 200, 15);
   fill('#a1251b');
   ellipse(205, 200, 5);
   fill('#D2CFDA');
   ellipse(245, 200, 45);
   fill('#ead6b8');
   ellipse(310, 200, 40);
   fill('#D5FBFC');
   ellipse(350, 200, 20);
   fill('#5b5ddf');
   ellipse(380, 200, 20);
   fill('red');
   triangle(mouseX, mouseY, mouseX-2, mouseY+5, mouseX+2, mouseY+5);
   triangle(mouseX-2, mouseY+7, mouseX-4, mouseY+10, mouseX-2, mouseY+10);
   triangle(mouseX+2, mouseY+7, mouseX+2, mouseY+10, mouseX+4, mouseY+10);
   fill('#aaa9ad');
   rect(mouseX-2, mouseY+5, 4, 5);
   fill('#e25822');
   triangle(mouseX-1, mouseY+10, mouseX, mouseY+14, mouseX+1, mouseY+10);
}

function implicitcircle(x, y, cx, cy, r)
{
   return pow(x-cx, 2) + pow(y-cy, 2) - r*r;
}

var system, resVenus, resMars, resEarth, resAsteroid;
var drawSolarSystem;
var drawVenus1;

function setup() 
{
   createCanvas(400, 400);
   //Solar system
   drawSolarSystem = true;
   system = new PSys(width*.6, height*.5, random(25, 35));
   numBC = 20;
   for (var i=0; i < numBC; i++) {
      dx.push(random(-3, 3));
      dy.push(random(-3, 3));
      bcX.push(random(400));
      bcY.push(random(400));
      bcColor.push(color(random(242, 255), random(226 , 255), random(196, 255)));
      bcScale.push(random(.01, .3));
   }
   var x = -50;
   while (x < width + 50)
   {
      clX.push(x);
      clRot.push(random(-PI/30, PI/30));
      clColor.push(color(random(244, 255), random(235, 255), random(228, 255)));
      x += random(10, 50);
   }
   //Mars
  loc = createVector(random(50,100), random(280,330));
  dir = createVector(1, 0);
  headR = 0
  armRight = -PI/4;
  armLeft = PI/ 4
  legRight = -PI/8
  legLeft = PI/8


  treeTrunkX[0] = 15
  var i = 0
  while(i < 18) {

    if(i > 0) {
      treeTrunkX[i] = random(20,40) + treeTrunkX[i-1]
    }
    treeTrunkLength[i] = random(40,120)
    treeTrunkWidth[i] = random(10, 20)
    treeTrunkColor[i] = random(50,255)
    i++
  }   
   //Asteroid
   numCraters = 50;
   asteroidD = 200;
   manLoc = createVector(250, 150);
   leg = PI / 4;
   legDirection = true;
   walk = false;
   takeOff = false;
   spaceShipLoc = createVector(280, 120);
   spaceShipVel = createVector(0, 0);
   spaceShipAcc = createVector(.1, -.05);
   spaceShipJer = createVector(0, -.02);
   asteroidBelt = false;

   for(var i = 0; i < 60; i++){
      star.push(createVector(random(0, width), random(0, height)));
   }
   
   for(var j = -1 * asteroidD / 2; j < asteroidD / 2; j += 2){
      for(var k = -1 * asteroidD / 2; k < asteroidD / 2; k += 2){
         fillAsteroid.push(createVector(j, k));
      }
   }

   for(var i = 0; i < pow(asteroidD, 2) / 4; i++){
      if(pow(fillAsteroid[i].x + 5, 2) + pow(fillAsteroid[i].y + 5, 2) <= pow(asteroidD / 2, 2) && pow(fillAsteroid[i].x - 5, 2) + pow(fillAsteroid[i].y - 5, 2) <= pow(asteroidD / 2, 2) && pow(fillAsteroid[i].x + 5, 2) + pow(fillAsteroid[i].y - 5, 2) <= pow(asteroidD / 2, 2) && pow(fillAsteroid[i].x - 5, 2) + pow(fillAsteroid[i].y + 5, 2) <= pow(asteroidD / 2, 2)){
         asteroidC.push(color(200 - distance(fillAsteroid[i].x, fillAsteroid[i].y, 100, -100) / 1.3));
         asteroidB.push(true);
      }else{
         asteroidC.push(0);
         asteroidB.push(false);
      }
   }

   for(var i = 0; i < numCraters; i++){
      craters.push(createVector(random(-1 * asteroidD / 2, asteroidD / 2), random(-1 * asteroidD / 2, asteroidD / 2)));
      if(pow(craters[i].x + 5, 2) + pow(craters[i].y + 5, 2) < pow(asteroidD / 2, 2) && pow(craters[i].x - 5, 2) + pow(craters[i].y - 5, 2) < pow(asteroidD / 2, 2) && pow(craters[i].x + 5, 2) + pow(craters[i].y - 5, 2) < pow(asteroidD / 2, 2) && pow(craters[i].x - 5, 2) + pow(craters[i].y + 5, 2) < pow(asteroidD / 2, 2)){
         craterB.push(true);
      }else{
         craterB.push(false);
      }
      craterColor.push(150 - (distance(100, -100, craters[i].x, craters[i].y) / 1.75));
   }

   for(var i = 0; i < numCraters; i++){
      fill(craterColor[i], craterColor[i], craterColor[i]);
         ellipse(craters[i].x, craters[i].y, 10);
   }

   drawVenus1 = false;
}

var drawMars;

function draw() 
{
   background(0);
   if(drawSolarSystem){
      drawAst();
      system.run();
      drawplantes(); 
   }

   if (drawVenus1){
      drawSolarSystem = false;
      drawVenus();
   }

      if(earthRunning) {
      drawEarth();
   }
   if (drawMars){
     background('#FF6D4D')
     noStroke()
     mountains()
     runTrees()
     drawAlien(loc.x,loc.y)
     moveAlien()
   }
   if(asteroidBelt){
      drawSolarSystem = false;
      drawAsteroidBelt();
   }
}

function mouseClicked(){
      resVenus = implicitcircle(mouseX, mouseY, 125, 200, 5);
      resEarth = implicitcircle(mouseX, mouseY, 170, 200, 15/2);
      resMars = implicitcircle(mouseX, mouseY, 205, 200, 5/2);
      resAsteroid = implicitcircle(mouseX, mouseY, 210, 250, 5);

   if(earthRunning) {
      if (sailboatX > width) {
         sailboatX = width * 0.5;

         let num = Math.random();
         sailboatScale = 1 + 5 * num;
         sailboatSpeed = 0.3 + num;
         sailboatY = height * (0.9 + 0.05 * num);

      }

      if(implicitcircle(mouseX, mouseY, width*0.2, height*0.3, 50) <= 0) {
         document.getElementById("earthInstructions").style.display = "none";
         earthRunning = false;
      }
   }

   if(drawSolarSystem){
      if(resVenus <= 0){
         drawVenus1 = true;
      }
      if (resEarth <= 0){
         earthSetup();
      }
      if (resMars <= 0){
         drawMars = true;
      }
      if(resAsteroid <= 0){
         asteroidBelt = true;
      }

   }

   if(asteroidBelt){
      if(mouseX > 260 && mouseX < 295 && mouseY > 105 && mouseY < 135){
         walk = true;
      }
   }

   if(drawVenus1 && !drawSolarSystem){
      drawSolarSystem = true;
      drawVenus1 = false;
   }

}