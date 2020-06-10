/// the amount of levels
const levelDurations = 7;

const LOGO_HEIGHT = 80;
const LOGO_WIDTH = 396;
const PLAYER_HEIGHT = 50;
const PLAYER_WIDTH = 50;


const WALK = 'WALK';
const JUMP = 'JUMP';
const NORMAL = 'NORMAL';
const IDLE = 'IDLE';


function generateSpriteObject(sourceX, sourceY, sourceWidth, sourceHeight) {
 return  sourceX.map((sX, idx) => {
    const sY = sourceY[idx];
    const sourceW = sourceWidth[idx];
    const sourceH = sourceHeight[idx];
    return getSpriteObject(sX, sY, sourceW, sourceH, 0, 0, sourceW, sourceH);
  });
}





const SPRITE_MAPPER = {
  // map utils images
  // utils has background first so map accordingly for utils
  [BACKGROUND_SKY_INDICATOR]: getSpriteObject(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT, 0, 0, SCREEN_WIDTH, SCREEN_HEIGHT),
  [CLOUD_INDICATOR]: [
    // 0 reprsents small cloud annd 1 represents big
    getSpriteObject(214, 503, 48, 32, 0, 0, 48, 32),
    getSpriteObject(148, 503, 64, 32, 0, 0, 64, 32),
  ],
  [MOUNTAIN_INDICATOR]: [
    // 0 represents small mountain and 1 represents big mountain
    getSpriteObject(98, 503, 48, 32, 0, 304, 48, 32),
    getSpriteObject(0, 487, 96, 48, 0, 288, 96, 48),
  ],

  [BILL_BOARD_INDICATOR]: getSpriteObject(0, 765, 210, 148, 0, 188, 210, 148),
  [DAI_CAR_INDICATOR]: getSpriteObject(272, 573, 100, 44, 5260, 292, 100, 44),
  [BUILDING_INDICATOR]: [
    // 0 for home and 1 for office
    getSpriteObject(0, 402, 246, 83, 15, 87 ,246, 83),
    getSpriteObject(248, 402, 246, 83, 15, 87 ,246, 83),
  ],
  [WINDOW_INDICATOR]: [
    // 0 for home and 1 for office
    getSpriteObject(496, 402, 50, 49, 15, 87 ,50, 49),
    getSpriteObject(548, 402, 50, 49, 15, 87 ,50, 49),
  ],
  [DOOR_INDICATOR]: [
    // 0 for closed and 1 for open
    getSpriteObject(600, 402, 49, 66, 15, 87 ,49, 66),
    getSpriteObject(651, 402, 49, 66, 15, 87 ,49, 66),
  ],
  [BUILDING_TOP]: [
    // 0 for home and 1 for office
    getSpriteObject(702, 402, 96, 27, 145, 60, 96, 27),
    getSpriteObject(494, 470, 164, 7, 5340, 80, 164, 7),

  ],

  [COFFIN_INDICATOR]: [
    getSpriteObject(0, 915, 134, 98, 0, 0, 134, 98),
    getSpriteObject(136, 915, 134, 98, 0, 0, 134, 98),
    getSpriteObject(272, 915, 134, 98, 0, 0, 134, 98),
    getSpriteObject(408, 915, 134, 98, 0, 0, 134, 98),

  ],
  [OBSTACLE_INDICATOR]: [
    // 0 for car left view 1 for car right view 2 for cone and 3 for box
    getSpriteObject(0, 553, 100, 64, 0, 272,100, 64),
    getSpriteObject(102, 553, 100, 64, 0, 272,100, 64),
    getSpriteObject(204, 585, 32, 32,0, 304, 32, 32),
    getSpriteObject(238, 585, 32, 32, 0, 304, 32, 32),
  ],
  [LOGO_INDICATOR]: getSpriteObject(0, 680, LOGO_WIDTH, LOGO_HEIGHT, (SCREEN_WIDTH - LOGO_WIDTH)/ 2, 50, LOGO_WIDTH, LOGO_HEIGHT),
  [CURSOR_INDICATOR]: getSpriteObject(LOGO_WIDTH, 680, 16, 26, 0, 0, 16, 26),

  [GIFT_INDICATOR]: getSpriteObject(0, 0, 32, 32, 0, 0, 16, 16),
  // Enemy
  [CORONA_INDICATOR]: getSpriteObject(0, 0, 32, 32, 0, 0, 32, 32),
  [POLICE_INDICATOR]: {
    [IDLE]: {
      [RIGHT]: [
        getSpriteObject(0, 32, 24, 48, 0, 0, 24, 48),
        getSpriteObject(26, 32, 24, 48, 0, 0, 24, 48),
      ],
      [LEFT]: [
        getSpriteObject(0, 80, 24, 48, 0, 0, 24, 48),
        getSpriteObject(26, 80, 24, 48, 0, 0, 24, 48),
      ],
    },
    [WALK]: {
      [RIGHT]: generateSpriteObject(
        [0, 31, 68, 94, 120, 150, 183, 214],
        new Array(8).fill(128),
        [29, 35, 24, 24, 28, 31, 29, 27],
        new Array(8).fill(50)
      ),
      [LEFT]: generateSpriteObject(
        [0, 31, 68, 94, 120, 150, 183, 214],
        new Array(8).fill(178),
        [29, 35, 24, 24, 28, 31, 29, 27],
        new Array(8).fill(50)
      )
    },

  },



  [PLAYER_SPRITE_INDICATOR]:  {
    [IDLE]: {
      [RIGHT] : generateSpriteObject(
        [0, 24, 48, 72, 96, 120, 144],
        new Array(7).fill(0),
        new Array(7).fill(22),
        new Array(7).fill(49),
        ),
      [LEFT] : generateSpriteObject(
        [0, 24, 48, 72, 96, 120, 144],
        new Array(7).fill(49),
        new Array(7).fill(22),
        new Array(7).fill(49),
        ),
    },
    [WALK] : {
      [RIGHT]: generateSpriteObject(
        [0, 29, 58, 80, 104, 134, 166, 196],
        new Array(8).fill(98),
        [27, 27, 20, 22, 28, 30, 28, 24],
        new Array(8).fill(50),
      ),
      [LEFT]: generateSpriteObject(
        [0, 29, 58, 80, 104, 134, 166, 196],
        new Array(8).fill(148),
        [27, 27, 20, 22, 28, 30, 28, 24],
        new Array(8).fill(50),
      ),
    },
    [JUMP]: {
      [RIGHT]: generateSpriteObject(
        [0, 25, 49],
        new Array(3).fill(198),
        [23, 22, 20],
        new Array(3).fill(48),
      ),
      [LEFT]: generateSpriteObject(
        [0, 25, 49],
        new Array(3).fill(246),
        [23, 22, 20],
        new Array(3).fill(48),
      )
    }
  }
}


