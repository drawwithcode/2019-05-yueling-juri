let input;
let analyzer;
var satisfied_image;

function preload() {
  satisfied_image = loadImage("./assets/satisfied.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  background("#FECEE9");
  frameRate(3);

  imageMode(CENTER);
  image(satisfied_image, windowWidth / 2, windowHeight / 2 - 30, satisfied_image.width / 2, satisfied_image.height / 2);

  input = new p5.AudioIn();
  input.start();

  var button = createButton("eliminate acnes!");
  button.position(windowWidth/2-50,windowHeight-30);
  button.mousePressed(restSketch);
}

function restSketch() {
  background("#FECEE9");
  frameRate(3);

  input = new p5.AudioIn();
  input.start();

  imageMode(CENTER);
  image(satisfied_image, windowWidth / 2, windowHeight / 2 - 30, satisfied_image.width / 2, satisfied_image.height / 2);
}

function draw() {

  // text below
  var myText = "Say something ;)";
  textFont("Acme");
  textAlign(CENTER);
  textSize(40);
  fill("#5584AF");
  noStroke();
  text(myText, windowWidth / 2, windowHeight - 45);

  let volume = input.getLevel();

  let threshold = 0.1;
  var x = random(windowWidth / 2 - 220, windowWidth / 2 + 220);
  var y = random(windowHeight / 2 - 10, windowHeight - 100);
  var r = volume * 80;
  if (volume > threshold) {
    noStroke();
    fill(239, 86, 86, 100);
    ellipse(x, y, r);
  }

  let i = map(volume, 0, 1, height, 0);
  let ythreshold = map(threshold, 0, 1, height, 0);
  noStroke();
  fill(175);
  rect(0, 0, 20, height);
  fill(0);
  rect(0, i, 20, i);
  stroke(255, 212, 0);
  strokeWeight(2);
  line(0, ythreshold, 19, ythreshold);
}
