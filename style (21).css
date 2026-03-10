// class name: prototyping with code
// lab number: 2
// Name: Kehan Gong
// Email: gong.ke@northeastern.edu
// Assignment:Assignment[5] = "Screensaver"
// Pattern Ttile: Staring Staring 

let rad = 40;
let circNum = 6;
let angle1 = 60
let radIncre = 1;
let uperL =60;
let lowerL =10;
let rotAnimation = 100;
let colorValue = 10;
function setup() {
  createCanvas(600, 400);
}

function draw() {
  //translate(width/2,height/2);
  background(220,65,99);
  frameRate(20);
  for(x= width/4;x<width; x+=width/4){
    for(y= height/4; y<height; y+= height/4 ){
      push();
      
      push();
      translate(x,y)
      rotate(frameCount/40);
      noStroke();
      for( i=0;i<6;i++)
      {
        fill(colorValue,0,153);
        circle(rad,rad,rad*2);
        rotate(radians(angle1));

      }
      fill(100,100,158);
      circle (0,0,rad);
      pop();
      rad +=  radIncre;
      if(rad >= uperL||rad<= lowerL)
     {
      radIncre = -radIncre;
     }
        //rotAnimation += 10;

    
      
      pop();
   
    }
  }
    if(frameCount %5 ==0){
        colorValue ++;
      }
      if (colorValue == 250){
        colorValue =20;
      }

}
//
  
function flowerDraw(x,y){
 
   push();
   translate(x,y)
   rotate(frameCount/40);
  noStroke();
  for( i=0;i<6;i++){
    fill(colorValue,0,153);
    circle(rad,rad,rad*2);
    rotate(radians(angle1));
    
  }
  fill(100,100,158);
  circle (0,0,rad);
  pop();
  rad +=  radIncre;
  if(rad >= uperL||rad<= lowerL){
    radIncre = -radIncre;
  }
}

