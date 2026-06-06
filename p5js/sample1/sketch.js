// 과제 1 — 정적 추상화 "고요한 좌표"
function setup() {
  createCanvas(600, 400);
}
function draw() {
  background('#FAFAFC');
  stroke('#E0E5EC');
  line(300, 0, 300, 400);
  line(0, 200, 600, 200);
  line(50, 50, 550, 350);
  line(550, 50, 50, 350);
  strokeWeight(2);
  noStroke();
  fill('#ffd4f6');
  stroke('#e0cadf')
  strokeWeight(2)
  arc(0, 0, 200, 200, 0, PI / 2);
  arc(600, 0, 200, 200, PI / 2, PI);
  arc(0, 400, 200, 200, -PI / 2, 0);
  arc(600, 400, 200, 200, PI, PI * 1.5);

  fill('#c7d9f0');
  triangle(300, 80, 270, 20, 330, 20);
  triangle(300, 320, 270, 380, 330, 380);
  triangle(80, 200, 20, 170, 20, 230);
  triangle(520, 200, 580, 170, 580, 230);
  fill('#fcc2f0')
  quad(300, 120, 330, 150, 300, 180, 270, 150);
  quad(300, 280, 330, 250, 300, 220, 270, 250);

  fill('#fcd4e8')
  ellipse(200,200,300,300);
  ellipse(400,200,300,300);

  fill('#f7a3e5')
  arc(600, 500, 300 ,300 , 0, QUARTER_PI);

  fill(255, 170, 190, 220);
  circle(300, 200, 220);
  noFill();
  stroke(255, 255, 255, 180);
  strokeWeight(3);
  ellipse(300, 200, 260, 60);
  ellipse(300, 200, 60, 260);
  noFill();
  stroke(255, 255, 255, 180);
  strokeWeight(2);
  ellipse(300, 200, 240, 40);
  ellipse(300, 200, 40, 240);
  strokeWeight(1);
  ellipse(300, 200, 220, 20);
  ellipse(300, 200, 20, 220);

  noStroke();
  fill('#ffffff');
  circle(300, 200, 80);
  stroke('#f3bbfa');
  strokeWeight(12);
  point(180, 120);
  point(420, 120);
  point(180, 280);
  point(420, 280);

  stroke(255, 255, 255, 220);
  strokeWeight(8);
  point(300, 200);
}
