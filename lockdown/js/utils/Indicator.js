// create unique indicator each time for unique element to be used

function getUniqueIndicator() {
  return new Date().getTime() + Math.floor(Math.random() * (1000 - 0) + 0);
}

// Add indicators here and register them in Constant
const PLAYER_SPRITE_INDICATOR = getUniqueIndicator();
const GAME_UTIL_SPRITE_INDICATOR = getUniqueIndicator();


// menu
const LOGO_INDICATOR = getUniqueIndicator();
const CURSOR_INDICATOR = getUniqueIndicator();

// background
const BACKGROUND_SKY_INDICATOR = getUniqueIndicator();
const MOUNTAIN_INDICATOR = getUniqueIndicator();
const CLOUD_INDICATOR = getUniqueIndicator();
const BILL_BOARD_INDICATOR = getUniqueIndicator();

// BUILDING
const BUILDING_INDICATOR = getUniqueIndicator();
const DOOR_INDICATOR = getUniqueIndicator();
const WINDOW_INDICATOR = getUniqueIndicator();
const BUILDING_TOP = getUniqueIndicator();

// Dai
const DAI_INDICATOR = getUniqueIndicator();
const DAI_CAR_INDICATOR = getUniqueIndicator();

// Coffin
const COFFIN_INDICATOR = getUniqueIndicator();


// obstacle
const OBSTACLE_INDICATOR = getUniqueIndicator();

// Enemy

const ENEMY_SPRITE_INDICATOR = getUniqueIndicator();
const CORONA_INDICATOR = getUniqueIndicator();
const POLICE_INDICATOR = getUniqueIndicator();


// misc
const AIRPLANE_INDICATOR = getUniqueIndicator();
const BANNER_START_INDICATOR = getUniqueIndicator();
const BANNER_FIRST_INDICATOR = getUniqueIndicator();
const BANNER_SECOND_INDICATOR = getUniqueIndicator();
const BANNER_THIRD_INDICATOR = getUniqueIndicator();
const BANNER_END_INDICATOR = getUniqueIndicator();


// gift and power ups
const GIFT_INDICATOR = getUniqueIndicator();
const HEALTH_INDICATOR = getUniqueIndicator();
const POWERUP_INDICATOR = getUniqueIndicator();


// Sounds

const RAP_INDICATOR = getUniqueIndicator();