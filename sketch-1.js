function setup() {
  createCanvas(1000, 1000);
}

//   function draw() {
//     background(200);
//     畫圓（x,y,w,h）
//     ellipse(150, 150, 100, 80);
//   }
function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    // 如果按著左鍵畫筆-黑色
    fill(255);
  }
  ellipse(mouseX, mouseY, 1, 1);
}
