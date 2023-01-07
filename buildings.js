var colors = '0b3954-087e8b-bfd7ea-ff5a5f-c81d25'.split('-').map(a => '#' + a);
var overAllTexture;
function setup() {
  createCanvas(windowWidth, windowHeight);

  overAllTexture = createGraphics(width, height);

  overAllTexture.loadPixels();
  for (var i = 0; i < width; i++) {
    for (var o = 0; o < height; o++) {
      overAllTexture.set(
        i,
        o,
        color(0, noise(i / 2, o / 2, (i * o) / 50) * 50)
      );
    }
  }
  overAllTexture.updatePixels();

  background(120);
  fill('#222');
  rect(0, 0, width, height);

  noStroke();
  //   ellipse(mouseX, mouseY, 20, 20);
  //   for (var o = 0; o < height + 150; o += 100) {
  //     for (var i = 0; i < width; i += 80) {
  //       // setTimeout(()=>{
  //       push();
  //       // rotate(random(0.015))
  //       // scale(random(0.9,1.1))
  //       drawRandomBuilding(i, o);
  //       pop();
  //       // },(o*width+i)*10)
  //     }
  //   }
  push();
  blendMode(MULTIPLY);
  image(overAllTexture, 0, 0);
  pop();
}

function drawRandomBuilding(x, y) {
  let xx = x + random(-50, 50);
  let yy = y + random(-40, 0);
  let ww = random(100, 300);
  let hh = random(30, 95);
  let clr = random(colors);
  building(createVector(xx, yy), ww, hh, clr);
}

function generateTexture(x, y, w, h, clr) {
  push();
  let ccOp = color(clr.toString());
  ccOp.setAlpha(120);
  stroke(ccOp);
  translate(x, y);
  var getPossibility = (x, y) => random(x) < 0.4;

  for (var i = 1; i < w / 1.5; i += 1) {
    // let xx = log(random(w))*4
    // let yy = random(h)
    // point(xx,yy)
    for (var o = 0; o < h; o += 0.5) {
      if (getPossibility(i, o)) {
        strokeWeight(random(1));
        let xx = i + random(-1, 1);
        if (xx < 0) xx = 0;
        point(xx, o + random(-1, 1));
      }
    }
  }
  pop();
}

function getColorVar(clr) {
  let colorScalar = random(1.4, 2);
  let cc = color(clr);
  cc.setRed(cc._getRed() + random(-5, 5));
  cc.setGreen(cc._getGreen() + random(-5, 5));
  cc.setBlue(cc._getBlue() + random(-5, 5));

  let ccLight = color(cc.toString());
  ccLight.setRed(cc._getRed() * colorScalar);
  ccLight.setGreen(cc._getGreen() * colorScalar);
  ccLight.setBlue(cc._getBlue() * colorScalar);

  let ccDark = color(cc.toString());
  ccDark.setRed(cc._getRed() / colorScalar);
  ccDark.setGreen(cc._getGreen() / colorScalar);
  ccDark.setBlue(cc._getBlue() / colorScalar);

  return [cc, ccLight, ccDark];
}
function drawCube(p, w, h, clr) {
  push();
  translate(p);
  let colorSets = getColorVar(clr);
  let cc = colorSets[0],
    ccLight = colorSets[1],
    ccDark = colorSets[2];

  fill(cc);
  rect(0, 0, w, -h);
  // if (random()<0.3){
  // 	stroke(0,50)
  // 	strokeWeight(1)
  // 	let lX = random(2,5)
  // 	line(lX,random(-10,10),lX,-h+random(-10,10))
  // 	generateTexture(0,-h,w,h,ccDark)
  // }
  noStroke();
  push();
  fill(ccLight);
  translate(0, -h);
  shearX(-PI / 6);
  scale(1, 0.5);
  rect(0, 0, w, -w);
  generateTexture(0, -w, w, w, cc);
  pop();
  push();
  fill(ccDark);
  translate(w, 0);
  shearY((-PI * 2) / 6);
  scale(0.3, 1);
  rect(0, 0, w, -h);
  generateTexture(0, -h, w, h, ccLight);
  pop();
  pop();
}

function building(p, w, h, clr) {
  push();
  let colorSets = getColorVar(clr);
  let cc = colorSets[0],
    ccLight = colorSets[1],
    ccDark = colorSets[2];

  drawCube(p, w, h, clr);
  if (random() < 0.3) {
    drawCube(p.copy().add(createVector(5, -h - 5)), w - 10, random(0, 20), clr);
  }
  push();
  translate(p);
  //windows
  let wSpan = random(15, 24);
  let wSize = random(8, 10);
  for (var i = 10; i < w - 20; i += wSpan) {
    for (var o = int(random() * 5 + 3) * 10; o < h - 10; o += wSpan) {
      push();
      fill(255, 230);
      if (random() < 0.1) {
        noFill();
        strokeWeight(random(1));
        stroke(0, 50);
      }
      if (random() < 0.05) {
        // noFill()
        // strokeWeight(random(1))
        fill(255, 244, 165, 255);
        blendMode(HARD_LIGHT);
      }
      rect(i, -o, wSize, wSize);
      pop();
    }
  }

  //doors
  rectMode(CENTER);
  let dW = w / random(5, 10);
  let dH = w / 5;
  fill(0, 40);
  if (random() < 0.5) {
    fill(ccLight);
  } else {
    fill(ccDark);
  }
  // stroke(ccDark)
  for (var i = 0; i < 2; i++) {
    rect(w / 2, -dH / 2, dW, dH, dW, dW, 0, 0);
    // scale(0.9)
  }

  pop();

  if (random() < 0.1) {
    drawCube(
      p.copy().add(createVector(w / 2, -h / 2 + random(h))),
      10,
      h / 2,
      ccLight
    );
  }

  let cubeW = random(5, 30);
  if (random() < 0.2) {
    let cP = p.copy().add(createVector(random(w), -h - random(w)));
    let cX = cP.x,
      cY = cP.y;
    drawCube(createVector(cX, cY), cubeW, cubeW, ccLight);
    drawCube(createVector(cX, cY - random(50)), cubeW / 2, cubeW / 5, 'white');
    // drawCube(createVector(cX,cY-5),cubeW-5,2,'white')
  }

  pop();
}

function draw() {
  if (mouseIsPressed && frameCount % 2 == 0) {
    drawRandomBuilding(mouseX, mouseY);
  }
}
