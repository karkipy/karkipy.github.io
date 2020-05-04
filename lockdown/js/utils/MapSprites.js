
// const LEVEL_MAP = [
//   getSpriteObject(0, 0, 400, 320, 0, 0 , SCREEN_WIDTH, SCREEN_HEIGHT),
// ];

const LEFT = 'LEFT';
const RIGHT = 'RIGHT';
const UP = 'UP';
const DOWN = 'DOWN';
const durations = 5;
const MIDDLE = 'MIDDLE';


const tileHeight = 32;
const tileY = SCREEN_HEIGHT - tileHeight;

const NO_TILE = 0;
const LEFT_TILE = 1;
const RIGHT_TILE = 2;
const MIDDLE_TILE = 3;

const SINGLE_TILE = [
  { type: LEFT_TILE, width: 4 },
  { type: MIDDLE_TILE, width: 60 },
  { type: RIGHT_TILE, width: 4 },
];

const LEVEL_MAPPER = [
  ...SINGLE_TILE,
  ...SINGLE_TILE,
  ...SINGLE_TILE,
  { type: NO_TILE, width: 80 },
  ...SINGLE_TILE,
  ...SINGLE_TILE,
  ...SINGLE_TILE,
];



const SPRITE_MAPPER = {
  [BACKGROUND_SKY_INDICATOR]: getSpriteObject(0, 0, 320, 200, 0, 0, SCREEN_WIDTH, SCREEN_HEIGHT),
  [GAME_TILES_INDICATOR]:  {
    [LEFT_TILE]: getSpriteObject(0, 0, 4, tileHeight, 0, tileY, 4, tileHeight),
    [RIGHT_TILE]: getSpriteObject(5, 0, 4, tileHeight, 0, tileY, 4, tileHeight),
    [MIDDLE_TILE]: getSpriteObject(15, 0, 2, tileHeight, 0, tileY, 4, tileHeight),
  },
  [PLAYER_INDICATOR]: getSpriteObject(8, 0, 20, 32, 0, 100, 32, 40),
}


