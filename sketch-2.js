function setup() {
  // 建立3D畫布
  createCanvas(1000, 1000, WEBGL);
  // 上色 / 材質
  // normalMaterial();
  describe(
    'Camera orbits around a box when mouse is hold-clicked & then moved.'
  );
}
function draw() {
  background(200);
  // 控制敏感度
  orbitControl(10, 10, 0);
  rotateY(PI / 4);
  box(100, 100);
}
