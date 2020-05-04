// Define Image and other resource here
// Register here the images and sounds alike with same contract i.e. id and src

const SCREEN_WIDTH =  800;
const SCREEN_HEIGHT = 600;

const IMAGES = [
  { id: PLAYER_INDICATOR, src : 'images/MC.png' },
  { id: GAME_TILES_INDICATOR, src: 'images/tiles.png'},
  { id: BACKGROUND_SKY_INDICATOR, src: 'images/sky.png' },
];

const SOUNDS = [
  { id: PLAYER_INDICATOR, src : 'sounds/hurricaneKick.mp3' },
];

const registerMoves = {
  RIGHT: [39, 68],
  LEFT: [37, 65],
  UP: [38, 87],
}



const moveMapper = Object.keys(registerMoves).reduce((acc, cur) => {
  const values = registerMoves[cur];
  values.forEach((v) => {
    acc[v] = cur;
  });
  return acc;
}, {})