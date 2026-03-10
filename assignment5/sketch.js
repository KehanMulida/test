/*
Class: ARTG-2262+63 Prototyping with Code
Name: Kehan Gong
Email: gong.ke@northeastern.edu
Assignment[6]: Drawing App

How to use:
- Drag mouse to draw.
- [ / ] : brush size down/up
- 1-5   : change color palette
- E     : toggle eraser
- C     : clear canvas
- S     : save image
*/

let pg;                 // drawing layer
let brushSize = 40;
let strokeW = 2;
let paletteIndex = 0;
let eraserOn = false;

function setup() {
  createCanvas(900, 600);
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);

  pg = createGraphics(width, height);
  pg.colorMode(HSB, 360, 100, 100, 100);
  pg.angleMode(DEGREES);
  pg.background(0, 0, 95); // light background
}

function draw() {
  // show the drawing
  image(pg, 0, 0);

  //draw UI
  drawBigClockUI();
  drawInstructionsUI();
}
function mouseDragged() {
  let hueAuto = (frameCount * 0.8 + second() * 6) % 360;
  let col = pickPaletteColor(paletteIndex, hueAuto);

  pg.push();
  pg.translate(mouseX, mouseY);

  const s = brushSize;

  if (eraserOn) {
    pg.noStroke();
    pg.fill(0, 0, 95, 100);   // color of background use to erase
    pg.ellipse(0, 0, s, s);
  } else {
    pg.noStroke();
    pg.fill(col);
    pg.ellipse(0, 0, s, s);
  }

  pg.pop();
}
function keyPressed() {
  if (key === '[') brushSize = max(5, brushSize - 5);
  if (key === ']') brushSize = min(200, brushSize + 5);

  if (key === 'E' || key === 'e') eraserOn = !eraserOn;

  if (key === 'C' || key === 'c') pg.background(0, 0, 95);

  if (key === 'S' || key === 's') saveCanvas('drawing_app', 'png');

  if (key >= '1' && key <= '5') paletteIndex = int(key) - 1;
}

function pickPaletteColor(idx, hueAuto) {
  // five buttons to change colors
  if (idx === 0) return color((hueAuto + 0) % 360, 80, 95, 80);
  if (idx === 1) return color((hueAuto + 40) % 360, 90, 90, 75);
  if (idx === 2) return color((hueAuto + 180) % 360, 70, 95, 75);
  if (idx === 3) return color((hueAuto + 260) % 360, 60, 95, 75);
  return color((hueAuto + 320) % 360, 85, 90, 75);
}

function drawBigClockUI() {
  
  let t = nf(hour(), 2) + ":" + nf(minute(), 2) + ":" + nf(second(), 2);

  noStroke();
  fill(0, 0, 0,0);
  rect(0, 0, width, 110);

  // time

  textAlign(CENTER, CENTER);
 // textStyle(BOLD);
  
  textSize(65);


  stroke(255, 255, 100, 90);
  strokeWeight(8);
  fill(0, 0, 0, 0);
  text(t, width / 2, 55);

  noStroke();
  fill(255, 255, 100, 95); 
  text(t, width / 2, 55);
}

function drawInstructionsUI() {
  textAlign(LEFT, TOP);
  textStyle(NORMAL);
  textSize(14);
  fill(0, 0, 15, 80);
  noStroke();

  const lines =
    "Drag: draw\n" +
    "[ / ]: brush size\n" +
    "1-5: color mode\n" +
    "E: eraser\n" +
    "C: clear\n" +
    "S: save";

  let pad = 12;
  let boxW = 170;
  let boxH = 120;
  fill(0, 0, 0, 18);
  rect(width - boxW - pad, 110 + pad, boxW, boxH, 12);

  fill(0, 0, 15, 85);
  text(lines, width - boxW - pad + 12, 110 + pad + 10);
}