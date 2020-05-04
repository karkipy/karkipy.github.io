// create unique indicator each time for unique element to be used

function getUniqueIndicator() {
  return new Date().getTime() + Math.floor(Math.random() * (1000 - 0) + 0);
}

// Add indicators here and register them in Constant
const PLAYER_INDICATOR = getUniqueIndicator();
const GAME_TILES_INDICATOR = getUniqueIndicator();
const BACKGROUND_SKY_INDICATOR = getUniqueIndicator();