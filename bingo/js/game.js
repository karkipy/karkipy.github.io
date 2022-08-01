let currentNumber = null;
let usedUpNumbers = [];

function generateNumber() {
  while(true) {
    currentNumber = Math.floor(Math.random() * 75) + 1
    if (!usedUpNumbers.includes(currentNumber)) {
      usedUpNumbers.push(currentNumber);
      return currentNumber;
    }
  }
}

function addNumber() {
  const div = document.getElementById('usedUp');
  const text = `Numbers drawn: ${usedUpNumbers.join(', ')}`;
  div.innerText = text;
}
const tv = new TV(TV_INDICATOR, addNumber);

function showNumber() {
  const num = generateNumber();
  tv.animate(`${num}`);
}

const animatedBall = new AnimatedBall(BALL_INDICATOR, showNumber);

function rollTheNumber() {
  animatedBall.animateBall();
}

const wheel = new Wheel(WHEEL_INDICATOR, rollTheNumber);
const stand = new Stand(STAND_INDICATOR);


const bingoballs = [];

for (let i= 0; i < 20; i++) {
  bingoballs.push(new Ball(BALL_INDICATOR, i));
}


function onSpinCall() {
  wheel.spinTheWheel();
  playAudio(WHEEL_INDICATOR)
  bingoballs.forEach(b => {
    b.jump();
  })
}


function initAll() {
  wheel.setImage();
  stand.setImage();
  tv.setImage();
  animatedBall.setImage();
  bingoballs.forEach((b) => {
    b.setImage();
  })
}

function clearAll() {
  ctx.clearRect(0,0,SCREEN_WIDTH,SCREEN_HEIGHT);
}


function mainLoop() {
  clearAll();
  bingoballs.forEach((b) => {
    b.draw();
  })
  wheel.draw();
  stand.draw();
  animatedBall.draw();
  tv.draw();

  animationReq = requestAnimationFrame(mainLoop);
}

initAll();