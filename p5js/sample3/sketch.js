// 과제 3 — 인터랙티브 캐릭터 (과제 2를 동적화)
// 클릭=볼 빨개짐 / 방향키=이동 / 스페이스=점프 / B=깜빡 / G=GIF 저장
// + 미리보기에서도 움직임이 보이도록 가벼운 숨쉬기·자동 깜빡임을 추가
let charX = 0;
let charY = 0;
let bounceY = 0;
let bounceVel = 0;
let blushAlpha = 0;
let isBlinking = false;
let blinkTimer = 0;

function setup() {
  createCanvas(400, 600);
}

function draw() {
  background("#f5ebeb");

  if (bounceVel !== 0 || bounceY !== 0) {
    bounceVel += 1.5;
    bounceY += bounceVel;
    if (bounceY >= 0) {
      bounceY = 0;
      bounceVel = 0;
    }
  }

  if (blushAlpha > 0) blushAlpha -= 2;

  // 자동 깜빡임 (가만히 둬도 살아있어 보이도록)
  if (!isBlinking && frameCount % 200 === 0) {
    isBlinking = true;
    blinkTimer = 0;
  }
  if (isBlinking) {
    blinkTimer++;
    if (blinkTimer > 12) {
      isBlinking = false;
      blinkTimer = 0;
    }
  }

  // 가벼운 숨쉬기(idle) 움직임
  let idle = sin(frameCount * 0.05) * 4;
  translate(charX, charY + bounceY + idle);

  let lEyeX = 172;
  let rEyeX = 228;
  let eyeY = 255;
  let mx = mouseX - charX;
  let my = mouseY - charY - bounceY - idle;
  let lPupilX = lEyeX + constrain((mx - lEyeX) * 0.15, -4, 4);
  let lPupilY = eyeY + constrain((my - eyeY) * 0.15, -3, 3);
  let rPupilX = rEyeX + constrain((mx - rEyeX) * 0.15, -4, 4);
  let rPupilY = eyeY + constrain((my - eyeY) * 0.15, -3, 3);

  noStroke();

  fill("#28190F");
  ellipse(200, 235, 150, 157);
  rect(125.7, 248, 55, 88, 0, 0, 0, 10);
  rect(218.3, 248, 55, 88, 0, 0, 10, 0);
  ellipse(200, 350, 160, 100);

  fill(255);
  rect(114, 343, 173, 200, 30, 30, 0, 0);
  fill("#e9e0ff");
  beginShape();
  vertex(130, 343);
  vertex(270, 343);
  vertex(287, 543);
  vertex(113, 543);
  endShape(CLOSE);
  fill(255);
  triangle(200, 390, 160, 343, 200, 343);
  triangle(200, 390, 240, 343, 200, 343);

  fill("#ffe6c7");
  rect(178, 322, 43, 29, 0, 0, 10, 10);
  triangle(178, 343, 200, 390, 221, 343);

  fill("#ffe6c7");
  ellipse(200, 255, 105, 145);
  ellipse(256, 257, 18, 28);
  ellipse(145, 257, 18, 28);

  if (blushAlpha > 0) {
    fill(255, 100, 120, blushAlpha);
    ellipse(163, 278, 38, 20);
    ellipse(237, 278, 38, 20);
  }

  stroke("#B19580");
  strokeWeight(1.2);
  noFill();
  bezier(158, 243, 163, 237, 178, 237, 186, 243);
  bezier(242, 243, 237, 237, 222, 237, 214, 243);
  noStroke();

  fill("#FFF8ED");
  ellipse(lEyeX, eyeY, 32, 22);
  ellipse(rEyeX, eyeY, 32, 22);

  if (isBlinking) {
    fill("#ffe6c7");
    ellipse(lEyeX, eyeY, 34, 24);
    ellipse(rEyeX, eyeY, 34, 24);
    stroke("#4D3128");
    strokeWeight(1.5);
    line(lEyeX - 14, eyeY, lEyeX + 14, eyeY);
    line(rEyeX - 14, eyeY, rEyeX + 14, eyeY);
    noStroke();
  } else {
    fill("#4D3128");
    ellipse(lPupilX, lPupilY, 18, 18);
    ellipse(rPupilX, rPupilY, 18, 18);
    fill("#8B5E4F");
    ellipse(lPupilX, lPupilY, 13, 13);
    ellipse(rPupilX, rPupilY, 13, 13);
    fill("#0D0705");
    ellipse(lPupilX, lPupilY, 8, 8);
    ellipse(rPupilX, rPupilY, 8, 8);
    fill(255);
    ellipse(lPupilX + 3, lPupilY - 4, 6, 6);
    ellipse(rPupilX + 3, rPupilY - 4, 6, 6);
    ellipse(lPupilX - 4, lPupilY + 3, 3, 3);
    ellipse(rPupilX - 4, rPupilY + 3, 3, 3);
  }

  stroke("#28190F");
  strokeWeight(1);
  noFill();
  line(158, 248, 153, 245);
  line(162, 246, 157, 243);
  line(242, 248, 247, 245);
  line(238, 246, 243, 243);
  noStroke();

  fill("#F4B39A");
  triangle(200, 274, 194, 288, 206, 288);

  fill("#E8A2A8");
  beginShape();
  vertex(188, 304);
  bezierVertex(195, 301, 205, 301, 212, 304);
  bezierVertex(205, 308, 195, 308, 188, 304);
  endShape(CLOSE);

  stroke(240, 240, 240, 220);
  strokeWeight(5);
  noFill();
  ellipse(lEyeX, eyeY, 52, 48);
  ellipse(rEyeX, eyeY, 52, 48);
  strokeWeight(3.5);
  line(190, eyeY, 210, eyeY);
  line(146, eyeY, 138, eyeY);
  line(254, eyeY, 262, eyeY);
  noStroke();

  fill("#28190F");
  beginShape();
  vertex(126, 290);
  bezierVertex(120, 330, 115, 370, 112, 410);
  bezierVertex(109, 445, 112, 478, 118, 508);
  bezierVertex(120, 525, 116, 542, 110, 560);
  vertex(150, 560);
  bezierVertex(152, 540, 154, 520, 152, 498);
  bezierVertex(148, 470, 146, 442, 148, 412);
  bezierVertex(150, 378, 152, 345, 150, 310);
  endShape(CLOSE);

  beginShape();
  vertex(274, 290);
  bezierVertex(280, 330, 285, 370, 288, 410);
  bezierVertex(291, 445, 288, 478, 282, 508);
  bezierVertex(280, 525, 284, 542, 290, 560);
  vertex(250, 560);
  bezierVertex(248, 540, 246, 520, 248, 498);
  bezierVertex(252, 470, 254, 442, 252, 412);
  bezierVertex(250, 378, 248, 345, 250, 310);
  endShape(CLOSE);
}

function mousePressed() {
  blushAlpha = 220;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) charX -= 15;
  if (keyCode === RIGHT_ARROW) charX += 15;
  if (keyCode === UP_ARROW) charY -= 15;
  if (keyCode === DOWN_ARROW) charY += 15;
  if (key === ' ' && bounceY === 0) bounceVel = -18;
  if (key === 'b' || key === 'B') {
    isBlinking = true;
    blinkTimer = 0;
  }
  if (key === 'g' || key === 'G') saveGif('character', 5);
}
