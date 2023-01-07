let pg;
function setup() {
  createCanvas(600, 600);
  // 建立圖層
  pg = createGraphics(1000, 1000);
}

function draw() {
  background(200);
  pg.background(100, 100);
  pg.noStroke();
  pg.ellipse(pg.width / 2, pg.height / 2, 150, 150);
  image(pg, 50, 50);
  image(pg, 0, 0, 150, 150);
}
