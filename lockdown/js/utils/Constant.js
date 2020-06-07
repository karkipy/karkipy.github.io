// Define Image and other resource here
// Register here the images and sounds alike with same contract i.e. id and src

const SCREEN_WIDTH =  800;
const SCREEN_HEIGHT = 400;
const GROUND_HEIGHT = 64;

const IMAGES = [
  { id: PLAYER_SPRITE_INDICATOR, src : 'images/PlayerSprite.png' },
  { id: GAME_UTIL_SPRITE_INDICATOR, src: 'images/UtilsSprite.png' }
];

const SOUNDS = [
  { id: PLAYER_SPRITE_INDICATOR, src : 'sounds/hurricaneKick.mp3' },
];

// Moves
const LEFT = 'LEFT';
const RIGHT = 'RIGHT';
const UP = 'UP';
const DOWN = 'DOWN';
const ENTER = 'ENTER';

const registerMoves = {
  RIGHT: [39, 68],
  LEFT: [37, 65],
  UP: [38, 87],
  DOWN: [40, 83],
  ENTER: [13],
}



const moveMapper = Object.keys(registerMoves).reduce((acc, cur) => {
  const values = registerMoves[cur];
  values.forEach((v) => {
    acc[v] = cur;
  });
  return acc;
}, {})