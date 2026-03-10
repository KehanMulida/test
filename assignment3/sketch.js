// class name: prototyping with code
// lab number: 2
// Name: Kehan Gong
// Email: gong.ke@northeastern.edu
// Assignment:Assignment[4] = "Decorative Pattern"
// Pattern Ttile: Staring Staring 

function setup() {
  createCanvas(1024, 1024);
}

function keyPressed(){
  if(key =='S'|| key=='s'){
    saveCanvas("assignment[4]_Decorative_Pattern_Gong_Kehan.png");
  }
}

function draw() {
  background(240, 249, 255);
  let num = 100;
  let canX = 1024;
  
  noStroke();
  fill(105, 223, 245);
  for(let cy = 0; cy<height; cy+=50){
    for(let cx =0; cx<width; cx +=50){
      if(cx%100 == 0){
         circle(cx,cy+20,12);
      }
      else{
      circle(cx,cy,12);
      }
    }
  }

  for (let y = num; y < height; y += 90) {
    for(let i = 1; i < 3; i++){
          let q = y+random(-40,40);
      for (let x = num ; x < width; x += width/2) {
        randomSeed(x * 10000 + y);
    
        if(x >= width/2){
           drawIrregularStar(canX-100 +random(-20,20) - i * 50, q);
        }
        else{
          drawIrregularStar(x +random(-20,20)+ i * 50, q);
        } 
      }
    }
  }
  for(let g=num; g<height;g+=45){
     drawIrregularStar(width/2 +random(-50,50) , g);
        
  }
  
}

function drawIrregularStar(x, y) {
  push();
  translate(x, y);

  let siz = random(0.3,0.6)
  scale(siz);

  strokeWeight(8);
  
  let strokeColor = random(0,4);
  
  if(strokeColor >= 2){
    stroke(255, 204, 0);
  }
  else{
    stroke(240, 106, 255);
  }
 // noStroke();
  fill(240, 249, 255);

  let j = 4;
  let a = random(-j, j);
  let b = -50 + random(-j,j);
  beginShape();
  vertex(a,  b);
   vertex(a,  b);
  vertex(18 + random(-j, j), -18 + random(-j, j));
  vertex(50 + random(-j, j), -10 + random(-j, j));
  vertex(22 + random(-j, j),  8 + random(-j, j));
  vertex(30 + random(-j, j), 45 + random(-j, j));
  curveVertex(0 + random(-j, j),  25 + random(-j, j));
  vertex(-28 + random(-j, j), 45 + random(-j, j));
  vertex(-20 + random(-j, j),  8 + random(-j, j));
  vertex(-50 + random(-j, j), -10 + random(-j, j));
  vertex(-18 + random(-j, j), -18 + random(-j, j));
  vertex(a,  b);
    vertex(a,  b);
  endShape();

  pop();
}