let myImage;
let halfImage;

function preload() {
  myImage = loadImage('assets/pic1.jpg');
}

function setup() {
  myImage.loadPixels();
  halfImage = (4 * myImage.width * myImage.height) / 2;
  for (let i = 0; i < halfImage; i++) {
    myImage.pixels[i + halfImage] = myImage.pixels[i];
  }
  myImage.updatePixels();
}

function draw() {
  image(myImage, 0, 0, width, height);
}
