// create unique indicator each time for unique element to be used

function getUniqueIndicator() {
  return new Date().getTime() + Math.floor(Math.random() * (1000 - 0) + 0);
}

// Add indicators here and register them in Constant
const PLAYER_INDICATOR = getUniqueIndicator();
const WHEEL_INDICATOR = getUniqueIndicator();
const STAND_INDICATOR = getUniqueIndicator();
const TV_INDICATOR = getUniqueIndicator();
const BALL_INDICATOR = getUniqueIndicator();