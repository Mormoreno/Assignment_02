function setup() {
  createCanvas(500,500);
  frameRate(60);
  angleMode(DEGREES);
  background(0,0,0);
}

var raggio=200;
var angolo=0;

function draw() {

	angolo=frameCount*3;
	
	if(angolo>=360)
	noLoop();
	
	
	stroke(255,255,255);
  //line(width/2+raggio,height/2,width/2-raggio,height/2);
  
  line(width/2+raggio,height/2,width/2-(raggio*cos(angolo)),height/2+(raggio*sin(angolo)));
}