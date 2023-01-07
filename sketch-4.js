function setup() {
  createCanvas(windowWidth, windowHeight);
}

//   function draw() {
//     background(200);
//     畫圓（x,y,w,h）
//     ellipse(150, 150, 100, 80);
//   }
let x = 0;
let y = 0;
function draw() {
  let X = mouseX + x;
  let Y = mouseY + y;
  // fill(X % 255, Y % 255, (X + Y) % 100);
  fill(X, Y, (X + Y) % 255);
  translate(X, Y);
  rotate(frameCount / 10);
  rect(X, Y, 80, 80);
  if (x > 200) {
    x = 0;
  } else {
    x++;
  }
  if (y > 1000) {
    y = 0;
  } else {
    y++;
  }
}
