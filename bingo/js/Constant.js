// Define Image and other resource here
// Register here the images and sounds alike with same contract i.e. id and src

const SCREEN_WIDTH =  800;
const SCREEN_HEIGHT = 600;
const WHEEL_HEIGHT = 160;
const WHEEL_WIDTH = 160;
const WHEEL_X = 470;
const WHEEL_Y = 240;
const WHEEL_RADIUS = WHEEL_WIDTH/2;
const WHEEL_CENTER = {
  x: WHEEL_X + WHEEL_RADIUS,
  y: WHEEL_Y + WHEEL_RADIUS
}

const STAND_X = 338;
const STAND_Y = 310;
const TV_X = 170;
const TV_Y = 250;
const BALL_WIDTH = 16;

const IMAGES = [
  { id: WHEEL_INDICATOR, src : 'images/wheel.png' },
  { id: STAND_INDICATOR, src : 'images/stand.png' },
  { id: TV_INDICATOR, src : 'images/TV.png' },
  { id: BALL_INDICATOR, src : 'images/ball.png' },
];

const SOUNDS = [
  { id: WHEEL_INDICATOR, src : 'sounds/spin.mp3' },
  { id: TV_INDICATOR, src : 'sounds/ting.mp3' },
];