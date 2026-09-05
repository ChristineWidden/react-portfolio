
function setup() {
	var canvas = createCanvas(400, 400);
	canvas.parent('sketchHolder');
}

var shineX = 0;

function draw() {
	const shadowStretch = 0.4;
	if (shineX > 700) {
		shineX = 0;
	}


	noStroke(); /*disables the outline*/

	/*background(255, 255, 191); /*yellow*/
	background(255, 191, 249); /*pink*/


	/* fill(255, 255, 234); /*light yellow*/
	fill(255, 234, 253); /*light pink*/
	rect(0,0, 400, 255);

	fill(255, 255, 255);
	quad(shineX, 0, shineX + 100, 255, shineX + 180, 255, shineX + 80, 0);

	fill(0, 0, 0);

	quad(0,0,135,0,135,255,0,315); /*left wall*/
	quad(325, 0, 400, 0, 400, 400, 325, 255); /*right wall*/
	rect(223, 0, 10, 255); /*vertical window bar*/
	rect(135, 110, 240, 10); /*horizontal window bar*/
	rect(0, 305, 400, 15);/*horizontal window shadow*/
	quad(222, 254, 230, 254, 191, 400, 142, 400);/*vertical window shadow*/

	/*Cat*/
	ellipse(185, 180, 50, 50);
	ellipse(250, 220, 50, 50);
	triangle(235, 243, 220, 255, 270, 255);/*front leg*/
	triangle(245, 185, 240, 198, 251, 196); /*back ear*/
	triangle(252, 185, 247, 196, 258, 197); /*front ear*/
	triangle(157, 229, 157, 255, 176, 255); /*back leg*/

	fill(255, 191, 249);
	triangle(261, 221, 271, 224, 263, 237); /*mouth*/

	fill(0, 0, 0);
	triangle(262, 220, 265, 221, 263, 225); /*left tooth*/
	triangle(268, 222, 271, 223, 268, 226); /*right tooth*/

	/* fill(255, 255, 191); */
	/*ellipse(200, 215, 84, 84);*/
	fill(0, 0, 0);
	ellipse(200, 215, 80, 80); /*cat body*/

	/*Cat shadow*/
	ellipse(185, catShadow(180), 50, shadowStretch*50);
	ellipse(250, catShadow(220), 50, shadowStretch*50);
	triangle(235, catShadow(243), 220, catShadow(255), 270, catShadow(255)); /*front leg*/
	triangle(245, catShadow(185), 240, catShadow(198), 251, catShadow(196)); /*back ear*/
	triangle(252, catShadow(185), 247, catShadow(196), 258, catShadow(197)); /*front ear*/
	triangle(157, catShadow(229), 157, catShadow(255), 176, catShadow(255)); /*back leg*/

	fill(0, 0, 0);
	/*ellipse(200, catShadow(215), 84, 84);*/
	fill(0, 0, 0);
	ellipse(200, catShadow(215), 80, shadowStretch*80); /*cat body shadow*/


	shineX = shineX + 2.5;

}

function catShadow(y) {
	/*return (2*255) - y * 0.75;*/
	return 255 - 0.4*(y - 255);
}