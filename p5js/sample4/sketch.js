// 과제 4 — 동적 추상화 (과제 1을 애니메이션화)
// 시간 기반 회전·bounce·무지개 색순환·파티클. S 키로 GIF 저장.
function setup() {
  createCanvas(600, 400);
  colorMode(RGB, 255);
}

function draw() {
  // 배경도 살짝 변화를 주었다 (잔상 효과)
  background(250, 250, 252, 80);

  let t = millis() / 1000;
  let pulse = sin(t * 2);
  let pulse01 = (pulse + 1) / 2;
  let bounce = abs(sin(t * 3));
  let fastWave = sin(t * 4);

  // 배경 격자선
  stroke('#E0E5EC');
  strokeWeight(1);
  let shake = sin(t * 5) * 3;
  line(300 + shake, 0, 300 - shake, 400);
  line(0, 200 + shake, 600, 200 - shake);
  line(50, 50, 550, 350);
  line(550, 50, 50, 350);

  // 네 모서리 부채꼴
  colorMode(HSB, 360, 100, 100, 100);
  let cornerHue = (t * 30) % 360;
  fill(cornerHue, 40, 100, 90);
  stroke(cornerHue, 30, 80);
  strokeWeight(2);
  let cornerSize = 200 + sin(t * 2) * 60;
  arc(0, 0, cornerSize, cornerSize, 0, PI / 2);
  arc(600, 0, cornerSize, cornerSize, PI / 2, PI);
  arc(0, 400, cornerSize, cornerSize, -PI / 2, 0);
  arc(600, 400, cornerSize, cornerSize, PI, PI * 1.5);
  colorMode(RGB, 255);

  // 삼각형
  noStroke();
  let triBounce = bounce * 40;

  push();
  translate(300, 50 - triBounce);
  rotate(t * 2);
  fill(199, 217, 240);
  triangle(0, 30, -30, -30, 30, -30);
  pop();

  push();
  translate(300, 350 + triBounce);
  rotate(-t * 2);
  fill(199, 217, 240);
  triangle(0, -30, -30, 30, 30, 30);
  pop();

  push();
  translate(50 - triBounce, 200);
  rotate(t * 2);
  fill(199, 217, 240);
  triangle(30, 0, -30, -30, -30, 30);
  pop();

  push();
  translate(550 + triBounce, 200);
  rotate(-t * 2);
  fill(199, 217, 240);
  triangle(-30, 0, 30, -30, 30, 30);
  pop();

  // 중앙 마름모
  let diamondColors = [
    color('#fcc2f0'),
    color('#a3d5ff'),
    color('#c2fcd4'),
    color('#fff3a3')
  ];
  let idx = floor(t) % 4;
  let nextIdx = (idx + 1) % 4;
  let mixedColor = lerpColor(diamondColors[idx], diamondColors[nextIdx], t % 1);
  fill(mixedColor);

  push();
  translate(300, 150);
  rotate(t * 3);
  quad(0, -30, 30, 0, 0, 30, -30, 0);
  pop();

  push();
  translate(300, 250);
  rotate(-t * 3);
  quad(0, -30, 30, 0, 0, 30, -30, 0);
  pop();

  // 좌우 큰 원
  fill(252, 212, 232, 200);
  let bigCircle = 300 + sin(t * 2) * 40;
  let swing = sin(t * 1.5) * 30;
  ellipse(200 + swing, 200, bigCircle, bigCircle);
  ellipse(400 - swing, 200, bigCircle, bigCircle);

  // 오른쪽 아래 부채꼴
  fill('#f7a3e5');
  let arcStart = t;
  let arcEnd = t + PI / 2 + sin(t * 2) * 0.5;
  arc(600, 500, 300 + bounce * 50, 300 + bounce * 50, arcStart, arcEnd);

  // 중앙 큰 원
  colorMode(HSB, 360, 100, 100, 100);
  let centerHue = (t * 60) % 360;
  let centerSize = 220 + sin(t * 2.5) * 40;
  fill(centerHue, 50, 100, 85);
  noStroke();
  circle(300, 200, centerSize);
  colorMode(RGB, 255);

  // 중앙 흰 타원 링
  push();
  translate(300, 200);
  rotate(t);
  noFill();
  stroke(255, 255, 255, 200);
  strokeWeight(3 + sin(frameCount * 0.1) * 2);
  ellipse(0, 0, 260, 60);
  ellipse(0, 0, 60, 260);

  rotate(-t * 0.5);
  strokeWeight(2);
  ellipse(0, 0, 240, 40);
  ellipse(0, 0, 40, 240);

  rotate(t * 0.3);
  strokeWeight(1);
  ellipse(0, 0, 220, 20);
  ellipse(0, 0, 20, 220);
  pop();

  // 중앙 흰 원
  noStroke();
  fill(255, 255, 255, 230);
  let coreSize = 80 + bounce * 30;
  circle(300, 200, coreSize);

  // 회전하는 점
  stroke('#f3bbfa');
  strokeWeight(15 + pulse01 * 10);
  let orbitR = 130 + sin(t * 2) * 30;
  for (let i = 0; i < 6; i++) {
    let angle = t * 1.5 + i * (TWO_PI / 6);
    let px = 300 + cos(angle) * orbitR;
    let py = 200 + sin(angle) * orbitR;
    colorMode(HSB, 360, 100, 100);
    stroke((t * 80 + i * 60) % 360, 70, 100);
    colorMode(RGB, 255);
    point(px, py);
  }

  // 중심점
  stroke(255, 255, 255, 150 + bounce * 105);
  strokeWeight(10 + bounce * 8);
  point(300, 200);

  // 파티클
  noStroke();
  for (let i = 0; i < 8; i++) {
    let angle = i * (TWO_PI / 8) + t;
    let dist = 50 + (sin(t * 3 + i) + 1) * 80;
    let px = 300 + cos(angle) * dist;
    let py = 200 + sin(angle) * dist;
    colorMode(HSB, 360, 100, 100, 100);
    fill((t * 100 + i * 45) % 360, 60, 100, 70);
    colorMode(RGB, 255);
    let particleSize = 8 + sin(t * 4 + i) * 4;
    circle(px, py, particleSize);
  }
}

// S 키를 누르면 5초짜리 GIF 저장 (setup에서 자동저장 대신 키 입력으로 변경)
function keyPressed() {
  if (key === 's' || key === 'S') saveGif('artwork', 5);
}
