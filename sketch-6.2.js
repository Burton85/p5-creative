let myGrahic;
function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(4);
  fill(221, 20, 88);
  rect(0, 0, width, height);

  // 把所有畫筆加上陰影
  drawingContext.shadowColor = color(221, 20, 88, 50);
  drawingContext.shadowBlur = 50;

  // 修改邊匡樣式
  strokeWeight(1);
  stroke(95, 11, 14);

  myGrahic = createGraphics(width, height);
  myGrahic.loadPixels();
  myGrahic.updatePixels();

  // 畫布轉向
  rotate(-PI / 2);
  translate(-width, -50);
  for (var i = width; i > 0; i -= 60) {
    for (var o = height + 400; o >= 0; o -= 60) {
      addMountain(i, o);
    }
  }
  // push();
  // blendMode(MULTIPLY);
  // image(myGrahic, 0, 0);
  // pop();
  // addMountain();
}

function draw() {
  // push();
  // translate(random(width), random(height));
  // rotate(-PI / 2);
  // if (frameCount % 50 == 0) {
  //   addMountain();
  // }
  // pop();
}

function addMountain(x, y) {
  push();
  translate(x, y);
  // blendMode(MULTIPLY);
  var count = int(random(15, 30));
  var r = random(30, 300);
  let pan = random(2, 7);
  push();

  for (var i = 0; i < count; i++) {
    fill(163, 3, 39);
    if (i % 5 == 0) {
      fill(95, 11, 14);
    }
    if (i < count - 3 || i == count - 1) {
      rect(i * pan, 0, 20, r);
    }

    // r *= 0.9;
  }

  pop();
  pop();
}
