function setup() {
  createCanvas(windowWidth, windowHeight);
}

//   function draw() {
//     background(200);
//     畫圓（x,y,w,h）
//     ellipse(150, 150, 100, 80);
//   }
function draw() {
  fill(mouseX % 255, mouseY % 255, (mouseX + mouseY) % 100);
  // fill(mouseX,mouseY)
  translate(mouseX, mouseY);
  rotate(frameCount / 10);
  rect(windowWidth / mouseX, windowHeight / mouseY, 80, 80);
}
