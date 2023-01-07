function setup() {
  createCanvas(windowWidth, windowHeight);
}

//   function draw() {
//     background(200);
//     畫圓（x,y,w,h）
//     ellipse(150, 150, 100, 80);
//   }
let x = 0;
function draw() {
  fill(mouseX % 255, mouseY % 255, x, 10);
  translate(mouseX, mouseY);
  rotate(frameCount / 10);
  // 無邊匡
  // noStroke();
  rect(windowWidth / mouseX + x, windowHeight / mouseY + x, 80, 80);
  if (x > 200) {
    x = 0;
  } else {
    x += 0.1;
  }
}
