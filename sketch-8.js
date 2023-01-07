function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
}

function draw() {
  translate(width / 2, height / 2);
  noStroke();
  background(0, 0.3);
  for (var i = 0; i < 360; i += 1) {
    let R = random(1, 3);
    rotate(1);
    let r = frameCount + noise(i / 5, frameCount / 20, mouseX) * 100;
    ellipse(r, 0, R + r, R + r);
  }
  if (frameCount % 2 == 0) {
    fill(mouseX % 255, mouseY % 255, (mouseX + mouseY) % 500);
  }
}
