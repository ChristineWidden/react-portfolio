// Example of very simple particle systems - introduction to objects in javascript

let particleSystemArray = [];
// define a single particle
/**
 *
 * @param x
 * @param y
 * @param colorMode 0 for white, 1 for red, 2 for blue, 3 for green
 * @constructor
 */
function Particle(x , y, colorMode) // you will need to modify the parameters
{
   // the data associated with a particle
   this.accelY = 0.05; //gravity
   this.velX = random(-1, 1);
   this.velY = random(.5, 1.3);

   // note this particle only can vary its blue color 
   // - change this to include red and green
   this.pcolorB = random(50, 255);
   this.locX = x;
   this.locY = y;
   this.r = 8.0;
   this.life = 100;
   this.reverseLife = 0;

   this.alpha = 255;
  
   // a function to update the particle each frame
   this.updateP = function()
   {
      this.velY += this.accelY;
      this.locX += this.velX;
      this.locY += this.velY;
      this.life -= 1.0;
      this.reverseLife++;


      this.alpha = 255 * -pow((this.reverseLife-60)/50 , 2) +255;
   };
  
   // function to draw a particle
   this.renderP = function() 
   {
      noStroke();

      strokeWeight(2);
      push();
         //fill(14, 66, this.pcolorB, this.alpha);

      //console.log(colorMode);
      //console.log("start");
         switch(colorMode) {
            case 0:
               //console.log("white");
               stroke(255, 255, 255, this.alpha + 50);
               fill(255, 255, 100, this.alpha);
               break;
            case 1://red
               //console.log("red");
               stroke(this.pcolorB, 50, 50,this.alpha + 50);
               fill(255, 255, 255, this.alpha);
               break;
            case 2://green
               //console.log("green");
               stroke(120, this.pcolorB, 50,this.alpha + 50);
               fill(255, 255, 255, this.alpha);
               break;
            case 3://blue
               //console.log("blue");
               stroke(50, 120, this.pcolorB,this.alpha + 50);
               fill(255, 255, 255, this.alpha);
               break;
         }

         //fill(255, 255, 255, this.alpha);
         translate(this.locX, this.locY);
         ellipse(0, 0, this.r, this.r);
      pop();
   };
} //end of particle object definition


// define a group of particles as a particleSys
function PSys(sX, sY, num)
{
   // the data - lots of particles
   this.particles = [];

   this.life = 100;

   this.colorMode = getRandomInt(0,3);

   for (var i=0; i < num; i++) 
   {
      this.particles.push(new Particle(sX, sY, this.colorMode));
   }
  
   // function defining what to do each frame
   this.run = function() 
   {
      this.life = this.life-1;

      //if(this.life>-300) {
      if(this.particles[0].locY < height + 300) {
         for (var i = 0; i < this.particles.length; i++) {
            //update each particle per frame
            this.particles[i].updateP();
            this.particles[i].renderP();
         }
      }
      //}

   }
}

// declare of a variable to represent a particle system
var fireW1; 

function setup() 
{
   //createCanvas(400, 400);
   createCanvas(window.innerWidth, window.innerHeight);

   // start a new particle system
   fireW1 = new PSys(200, 100, 20);
}

function draw() 
{
   background(0);

   // run the particle system
   //fireW1.run();

   for (let i=0; i<particleSystemArray.length; i++) {
      particleSystemArray[i].run();
   }
}

function mouseClicked() {
   console.log("Mouse clicked");
   particleSystemArray.push(new PSys(mouseX, mouseY, 20));
}

function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}