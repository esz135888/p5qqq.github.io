function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}
function preload() {
  s = loadSound("Alternate.m4a");
}
function draw() {
  i = windowWidth / 2 - frameCount * 12; //按下後白球變小的變數
  //按下後發射
  if (mouseIsPressed == false) {
    background(frameCount % 255, mouseX % 255, mouseY % 255, 1);
    stroke(0);
    line(
      mouseX,
      mouseY,
      mouseX + random(frameCount % 255),
      mouseY + random(frameCount % 255)
    ); //右下
    line(
      mouseX,
      mouseY,
      mouseX + random(frameCount % 255),
      mouseY - random(frameCount % 255)
    ); //右上
    line(
      mouseX,
      mouseY,
      mouseX - random(frameCount % 255),
      mouseY + random(frameCount % 255)
    ); //左下
    line(
      mouseX,
      mouseY,
      mouseX - random(frameCount % 255),
      mouseY - random(frameCount % 255)
    ); //左上
    stroke(0, 0);
    r = random(frameCount % 255);
    ellipse(mouseX, mouseY, r, r);
    fill(0);
    //白線
    stroke(255);
    strokeWeight(random(5));
    line(
      mouseX,
      mouseY,
      mouseX + random(frameCount),
      mouseY + random(frameCount)
    ); //右下
    line(
      mouseX,
      mouseY,
      mouseX + random(frameCount),
      mouseY - random(frameCount)
    ); //右上
    line(
      mouseX,
      mouseY,
      mouseX - random(frameCount),
      mouseY + random(frameCount)
    ); //左下
    line(
      mouseX,
      mouseY,
      mouseX - random(frameCount),
      mouseY - random(frameCount)
    ); //左上
  } else if (mouseIsPressed) {
    //按下去之後

    if (i <= 0) {
      fill(0);
      ellipse(mouseX, mouseY, 0, 0);
      background(0);
      stroke(0);
      line(
        mouseX,
        mouseY,
        mouseX + random(frameCount - i),
        mouseY + random(frameCount - i)
      ); //右下
      line(
        mouseX,
        mouseY,
        mouseX + random(frameCount - i),
        mouseY - random(frameCount - i)
      ); //右上
      line(
        mouseX,
        mouseY,
        mouseX - random(frameCount - i),
        mouseY + random(frameCount - i)
      ); //左下
      line(
        mouseX,
        mouseY,
        mouseX - random(frameCount - i),
        mouseY - random(frameCount - i)
      ); //左上
      frameCount = 0;
    } else if (i > 0) {
      background(0);
      fill(255);
      ellipse(mouseX, mouseY, i, i);
      stroke(0);
      line(
        mouseX,
        mouseY,
        mouseX + random(frameCount) - frameCount * 12,
        mouseY + random(frameCount) - frameCount * 12
      ); //右下
      line(
        mouseX,
        mouseY,
        mouseX + random(frameCount) + frameCount * 12,
        mouseY - random(frameCount) + frameCount * 12
      ); //右上
      line(
        mouseX,
        mouseY,
        mouseX - random(frameCount) + frameCount * 12,
        mouseY + random(frameCount) - frameCount * 12
      ); //左下
      line(
        mouseX,
        mouseY,
        mouseX - random(frameCount) - frameCount * 12,
        mouseY - random(frameCount) + frameCount * 12
      ); //左上
    }
  }
}

function mousePressed() {
  if (s.isPlaying()) {
    s.pause();
  } else {
    s.play();
  }
}
