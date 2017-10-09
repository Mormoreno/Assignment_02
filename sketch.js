function setup() {
  createCanvas(500,500);
  frameRate(60);
  angleMode(DEGREES);
  background(0,0,0);
}

var raggio=100;
var offset=-100;
var angolo=0;
var angolo2=0;
var angolo3=0;
var angolo4=0;
var velocita=5;

function draw() {

	
	stroke(255,255,255);


  if(angolo<180)
  {
    angolo=-180+frameCount*velocita;
    //Primo cerchio
     line(offset+width/2+raggio,height/2,offset+width/2-(raggio*cos(angolo)),height/2+(raggio*sin(angolo)));
    
  }
  else
  {
    if(angolo2<360)
    {
    angolo2=-360+frameCount*velocita;
    //Secondo cerchio
    line(offset+width/2+raggio,height/2,-offset+width/2-(raggio*cos(angolo2)),height/2-(raggio*sin(angolo2)));
    }
   else
      {
        if(angolo3<540)
        {
         angolo3=-540+frameCount*velocita;
         //Terzo cerchio
         line(offset+width/2+raggio,height/2,width/2+(raggio*sin(angolo3)),offset+height/2-(raggio*cos(angolo3)));
        }
         else
          {
            if(angolo4<720)
            {
             angolo4=-720+frameCount*velocita;
             //Terzo cerchio
             line(offset+width/2+raggio,height/2,width/2-(raggio*sin(angolo4)),-offset+height/2-(raggio*cos(angolo4)));
            }
            else
            {
              
              
            noLoop();              
            }
         }
      }
    
  }
}