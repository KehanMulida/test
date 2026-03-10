// class name: prototyping with code
// lab number: 2
// Name: Kehan Gong
// Email: gong.ke@northeastern.edu
// Assignment:Assignment[5] = "Screensaver"
// Pattern Ttile: Hollow k

let horizAni = 1;
let easing = false;
let targetEdge = 0;
let w = 0;
let h = 0;
let incr = 2;
let upL =100
let lowL = 10;
let frameC = 0;

let speedX = 1;
let speedY =12;
let speedx =12;
let speedy =12;

let x1 = 0;
let y1 = 0;



function setup() {
  createCanvas(2048,1024);
  w = width/2;
  h = height/2;
  
  let cx = width/2;
  let cy = height/2;
  
}

function draw() {
  background(220);
  
   for (let x = 0; x < width; x++) {
    let d = abs(x - width / 2) / (width / 2);  
    let c = lerp(200, 15, d);                   
    stroke(c);
    line(x, 0, x, height);
  }
  blackOrbs();
  glowOrbs();

  push()
  let s = min(width, height) / 1024; 
  scale(s);
  push();
  fill(255);
  noStroke()
    drawKnight(w,h-100+ horizAni)
  pop()
  
  push();
     drawCloak(w,h-50+horizAni,s)
  pop();
  push();
  drawNailSword(w,h-50+horizAni,s*0.8)
  pop();
  translate(width/2-260, height/4)
  let hor = hour();
  let m = minute();
  let se = second();

  let t = nf(hor, 2) + ":" + nf(m, 2) + ":" + nf(se, 2);
  
  textSize(110)
  fill(255)
  text(t, 50, 50);
  
  pop();

  updateHoriz();
  

  
}

function updateHoriz() {
  if (!easing) {
    horizAni += incr;
    if (horizAni >= upL) {
      easing = true;
      targetEdge = upL;
    } else if (horizAni <= lowL) {
      easing = true;
      targetEdge = lowL;
    }
  } 
  else
  {
    let ease = 0.04;  
    horizAni = lerp(horizAni, targetEdge, ease);

    if (abs(horizAni - targetEdge) < 0.5) {
      horizAni = targetEdge;
      incr = -incr;
      easing = false;
    }
  }
}

function drawKnight(x,y){
  push();
  translate(x,y);
  beginShape()
  vertex(-55,-15)
  curveVertex(55,50)
  vertex(50,-50)
  curveVertex(-50,-50)
  vertex(-55,50)
  vertex(55,50)
  vertex(55,-15)
  endShape()
  
  fill(0)
  push()
  rotate(radians(19))
  ellipse(-40, -13, 35, 55);
  pop()
  push()
  rotate(radians(-19))
  ellipse(40, -13, 35, 55);
  pop()
  fill(255)
  beginShape();
  vertex(-57,-35);
  vertex(-60,-35);
  vertex(-68, -50);
  curveVertex(-65 , -70);
  //curveVertex(0 ,  25);
  //vertex(-55,-90);
  vertex(-47,-100);
  vertex(-35,-120);
  vertex(-45,-122);
  vertex(-56,-130);
  vertex(-64,-120);
  vertex(-90,-70);
  vertex(-85,-30);
  vertex(-65,-11);
  vertex(-60,3)
  //vertex(-60,1)
  
  endShape();

  push();
  scale(-1, 1);     
  drawHornLeft();     
  pop();
  push();
  drawBody();
  
  pop();
  
  
}
function drawBody() {
  noStroke()
  fill(0)
  beginShape();
   vertex(0,30)
    vertex(0,30)
  vertex(-20,35)
  vertex(-38,80)
  vertex(-38,150)
  vertex(-25,200)
  curveVertex(-10,200)
  vertex(-10,130)
  vertex(0,120)
  vertex(10,130)
  vertex(10,200)
  vertex(25,200)
  vertex(38,150)
  vertex(38,80)
  vertex(20,35)
  vertex(20,35)
  //vertex(0,30)

  endShape();
}
function drawHornLeft() {
  beginShape();
  vertex(-57,-35);
  vertex(-60,-35);
  vertex(-68, -50);
  curveVertex(-65 , -70);
  vertex(-47,-100);
  vertex(-35,-120);
  vertex(-45,-122);
  vertex(-56,-130);
  vertex(-64,-120);
  vertex(-90,-70);
  vertex(-85,-30);
  vertex(-65,-11);
  vertex(-60,3);
  endShape();
}
function drawCloak(x, y, s = 1) {
  
  translate(x, y);

  push();
  //rotate(radians(40))
  fill(105, 137, 148);
  beginShape();
  vertex(-35, -20);
  bezierVertex(-45, -20, -110, 45, -150, 30);
  bezierVertex(-150, 30, -90, 75, 20, 30);
 
  vertex(30, 45);
  bezierVertex(110, 95, 125, 35, 140,20);
  bezierVertex(140, 20, 123, 60, 40, -20);
  vertex(40,-20)
  endShape();
    push();
      //rotate(radians(40))
      fill(105, 137, 148);
      beginShape();
      vertex(-25, -20);
      bezierVertex(-45, -20, -80, 150, -120, 60);
      bezierVertex(-150, 60, -90, 185, -10, 45);
      vertex(-10, 45);
      vertex(10, 35);
      bezierVertex(45, 95, 100, 150, 140,50);
      bezierVertex(140, 50, 123, 139, 40, -20);
      vertex(10,-20)
      endShape();

    pop();
  pop();
}
function drawNailSword(x, y, s = 1) {
  push();
  translate(x, y);
  scale(s);
       
  fill(132, 138, 140);         
  beginShape();
  vertex(-12, -170);
  vertex(0, -230);
  vertex(12, -170);
  vertex(8, 70);
  vertex(3, 80);
  vertex(3, 130);
  vertex(-3, 130);
  vertex(-3, 80);
  vertex(-8, 70);
  vertex(-12,-170)
  endShape();
  pop();
  
  push()
  fill(0)
  ellipse(x,y+40,25,20)
  ellipse(x,y+50,25,20)
  pop()
}
function blackOrbs() {
  if (!blackOrbs.list) {
    blackOrbs.list = [];
  }

  let a = blackOrbs.list;

  if (frameCount % 2 == 0) {
  let orb = {};
  orb.x = random(width);
  orb.y = height + 20;
  orb.v = random(1.5, 3);
  orb.r = random(5, 10);
  a.push(orb);
  }

  for (let i = a.length - 1; i >= 0; i--) {
    a[i].y -= a[i].v;

    fill(0); 
    noStroke(); 
    circle(a[i].x, a[i].y, a[i].r * 2);

    noFill();
    stroke(0, 160);
    strokeWeight(2); 
    circle(a[i].x, a[i].y, a[i].r * 2.4);

    if (a[i].y + a[i].r < 0) a.splice(i, 1);
  }
}
function glowOrbs() {
  if (!glowOrbs.list) {
    glowOrbs.list = [];
  }

  let a = glowOrbs.list;

  if (frameCount % 10 == 0) {
  let orb = {};
  orb.x = random(width);
  orb.y = height + 20;
  orb.v = random(1.5, 3);
  orb.r = random(5, 10);
  a.push(orb);
  }

  for (let i = a.length - 1; i >= 0; i--) {
    a[i].y -= a[i].v;

    fill(255); 
    noStroke(); 
    circle(a[i].x, a[i].y, a[i].r * 2);

    noFill();
    stroke(255, 160);
    strokeWeight(2); 
    circle(a[i].x, a[i].y, a[i].r * 2.4);

    if (a[i].y + a[i].r < 0) a.splice(i, 1);
  }
}
