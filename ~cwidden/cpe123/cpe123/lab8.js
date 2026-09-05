// To start the animation click anywhere in the window
var loc, dir;
var neckR, wingR, beakR, time;
let frame;
let leg1R, leg2R, footR;
let legB1R, legB2R, footBR;
let animationSpeed;

var neckDown = true;
var wingDown = false;
var animate = false;

let bushesXArray = [];
let bushesYArray = [];
let bushesColorShiftArray = [];
let bushesSizeArray = [];

let bushAmount;

// normal set up
function setup()
{
   createCanvas(400, 400);

   loc = createVector(width*.9, height*.5);
   dir = createVector(-1, 0);
   frame = 0;
   neckR = 0;
   wingR = -PI/10;

   leg1R = 0;
   leg2R = 0;
   footR = PI/2;

   legB1R = 0;
   legB2R = 0;
   footBR = PI/2;

   beakR = 0;

   bushAmount = 30;

   animationSpeed = 0.1;

   generateBushes();
}

function generateBushes() {
   for(let i =0; i < bushAmount; i++) {
      bushesXArray[i] = random(0, width);
      bushesYArray[i] = random(height-50, height);
      bushesColorShiftArray[i] = random(-0, 50);
      bushesSizeArray[i] = random(0.5, 3);
   }
}

// normal draw
function draw()
{
   background(12, 245, 216);

   //foreground
   fill(78, 155, 16);
   rect(0, height/2, width, height/2);

   push();
      translate(loc.x - 90, 5*sin(0.2*loc.x) + 200);
      drawFly();
   pop();

   drawDuck();
   if (animate)
   {
      moveDuck();
   }

   frame++;
}


// method to control starting the duck over again and
// control animation on and off
function mousePressed()
{
   loc = createVector(width*.9, height*.5);
   animate = !animate;
}

function drawBushes() {
   for(let i = 0; i<bushAmount; i++) {
      push();
         fill(50 + bushesColorShiftArray[i], 120, 50 + bushesColorShiftArray[i]);
         translate(bushesXArray[i], bushesYArray[i]);
         scale(bushesSizeArray[i]);

         ellipse(0, 0, 50);
      pop();
   }
}

// code to draw the duck with animation parameters
// neckR and wingR - other transforms align the pieces
// to the correct pivot points Be very careful modifying
// this code - the structure of the push and pops are
// what builds the hierarchical relationships
function drawDuck()
{
   noStroke();

   push();

   //move the entire duck
   translate(loc.x, loc.y);
   scale(2); //scale the entire duck


   push();
   fill(255, 201, 14);
   translate(2, 14);
   push();
   rotate(leg1R);

   drawDuckLeg(false);
   pop();
   push();
   rotate(legB1R);
   drawDuckLeg(true);
   pop();
   pop();

   // draw body
   fill(245, 226, 12);
   ellipse(0, 0, 40, 30);

   //draw neck and head with possible animation transforms
   push();
   translate(-16, 0); //move into pivot position
   rotate(neckR);  //rotate by neckR parameter
   ellipse(0, -10, 10, 18); //neck
   ellipse(0, -17, 14, 14); //head
   fill(0);
   ellipse(0, -19, 4, 4);  //eye
   fill(155, 111, 16);
   triangle(-10, -18, -4, -21, -4, -15); //beak

   push();
   translate(-4, -18);
   rotate(beakR);
   //triangle(-10, -18, -4, -21, -4, -15);//-4, -18 to 0, 0
   triangle(-6, 0, 0, 3, 0, -3);
   pop();
   pop();

   //draw wing with possible animation transforms
   fill(227, 208, 66);
   push();
   translate(-8, -5); //move into pivot position
   rotate(wingR); //animtion parameter to control wing flap
   ellipse(14, 0, 34, 20); //wing
   pop();



   //TODO - this is where you will add the code to animate the legs - follow
   //the examples for the wings and neck


   pop();

   drawBushes();
}

function drawDuckLeg(isB) {
   push();
   //fill(0);
   //rotate(rotation);
   //drawLegJoint1(0, 0, 1, 0.1*PI + 0.15*PI * (sin(animationSpeed * leg1R + rotationStart)));

   drawLegJoint();
   push();
   translate(0, 5);
   if(isB) {
      rotate(legB2R)
   }else{
      rotate(leg2R);
   }

   drawLegJoint();
   push();
   translate(0, 5);
   if(isB) {
      rotate(footBR)
   }else{
      rotate(footR);
   }
   drawFoot();
   pop();
   pop();
   pop();
}

function drawLegJoint(rotationStart) {
   push();
   rect(-1, 0, 2, 5);
   pop();
}

function drawFoot() {
   push();
   triangle(-1, 0, 1, 0, -1, 5);
   pop();
}

function drawLegJoint1(translateX, translateY, scaleFactor, rotation, rotationStart) {
   push();
   translate(translateX, translateY);
   scale(scaleFactor);
   rotate(rotation);
   rect(-1, 0, 2, 5);
   drawLegJoint2(0, 5, 1,  0.3*PI + 0.25*PI * sin(animationSpeed * leg2R));
   pop();
}

function drawLegJoint2(translateX, translateY, scaleFactor, rotation) {
   push();
   translate(translateX, translateY);
   scale(scaleFactor);
   rotate(rotation);

   rect(-1, 0, 2, 5);
   drawDuckFoot(0, 5, 1, -0*PI + -0.25*PI * sin(animationSpeed * footR));
   pop();
}



function drawDuckFoot(translateX, translateY, scaleFactor, rotation) {
   push();
   translate(translateX, translateY);
   scale(scaleFactor);
   rotate(rotation);

   triangle(-1, 0, 1, 0, -1, 5);
   pop();
}


function drawFly() {
   fill(0);
   ellipse(0, 0, 2);
   ellipse(-1, -1, 1);
   ellipse(1, -1, 1);
}

// function to update all animation parameters - very
// simple scripted animation
function moveDuck()
{
   // update the ducks global location
   loc.add(dir);

   // find out how much the neck is rotated to decide which way to rotate
   // these constrain how much the neck moves up and down
   if (neckR < -PI/3)
   {
      neckDown = false;
   }
   if (neckR > PI/10)
   {
      neckDown = true;
   }

   // depending on which way we need to rotate, do so
   if (neckDown === true)
   {
      neckR -= PI/100;
   }
   else
   {
      neckR += PI/100;
   }

   // find out how much the wing is rotated to decide which way to rotate
   // these constrain how much the wing moves up and down
   if (wingR < -2*PI/5)
   {
      wingDown = true;
   }
   if (wingR > -PI/20)
   {
      wingDown = false;
   }

   // depending on which way we need to rotate, do so
   if (wingDown === false)
   {
      wingR -= PI/100;
   }
   else
   {
      wingR += PI/100;
   }

   animationSpeed = 0.1;

   leg1R = 0.4*PI * sin(frame * animationSpeed);
   leg2R = 0.20*PI * sin(2*frame * animationSpeed) + 0.25*PI;
   footR = 0.25*PI * sin(2*frame * animationSpeed + 0.25*PI) + 0.25*PI;

   let shift = PI;
   legB1R = 0.4*PI * sin(frame * animationSpeed + shift);
   legB2R = 0.20*PI * sin(2*frame * animationSpeed + shift) + 0.25*PI;
   footBR = 0.25*PI * sin(2*frame * animationSpeed + 0.25*PI + shift) + 0.25*PI;

   beakR = 0.1*PI*zigzag(frame*animationSpeed) + 0.05*PI;
}

function zigzag(x) {
   return abs(sin(x)) - abs(cos(x));
}

