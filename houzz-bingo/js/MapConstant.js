// Map constant to map the sprite accordingly and update the positon of x and y in canvas when needed to be drawn only



const MAP_IMAGE = {
  [WHEEL_INDICATOR]: [
    getSpriteObject(6, 6, 108, 108, WHEEL_X, WHEEL_Y, WHEEL_WIDTH, WHEEL_HEIGHT),
    getSpriteObject(126, 6, 108, 108, WHEEL_X, WHEEL_Y, WHEEL_WIDTH, WHEEL_HEIGHT),
    getSpriteObject(246, 6, 108, 108, WHEEL_X, WHEEL_Y, WHEEL_WIDTH, WHEEL_HEIGHT),
    getSpriteObject(366, 6, 108, 108, WHEEL_X, WHEEL_Y, WHEEL_WIDTH, WHEEL_HEIGHT),
    getSpriteObject(487, 6, 108, 108, WHEEL_X, WHEEL_Y, WHEEL_WIDTH, WHEEL_HEIGHT),
    getSpriteObject(605, 6, 108, 108, WHEEL_X, WHEEL_Y, WHEEL_WIDTH, WHEEL_HEIGHT),
  ],
  [STAND_INDICATOR]: [
    getSpriteObject(0, 0, 203, 108, STAND_X, STAND_Y, 280, 170),
  ],
  [TV_INDICATOR]: [
    getSpriteObject(0, 0, 123, 131, TV_X, TV_Y, 201, 219),
  ],
  [BALL_INDICATOR]: [
    getSpriteObject(0, 0, 16, 16, WHEEL_X - 5 - BALL_WIDTH + 160, STAND_Y, BALL_WIDTH, BALL_WIDTH),
  ]
}