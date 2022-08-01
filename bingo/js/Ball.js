const gravity = 1;
const friction = 0.98;

const LIMIT_X_MIN = WHEEL_X;
const LIMIT_X_MAX = WHEEL_X - 5 - BALL_WIDTH + 160;
const LIMIT_Y_MIN =  STAND_Y - WHEEL_RADIUS + BALL_WIDTH;
const LIMIT_Y_MAX =  STAND_Y + WHEEL_RADIUS - BALL_WIDTH;

function isPointInsideCircle(x, y) {
  const currentX = x > WHEEL_CENTER.x ? x + BALL_WIDTH : x;
  const currentY =  y > WHEEL_CENTER.y ? y + BALL_WIDTH: y;
  const valueX = Math.pow((WHEEL_CENTER.x - (currentX)), 2);
  const valueY = Math.pow((WHEEL_CENTER.y - (currentY)), 2);
  const someRes =  Math.sqrt(valueX + valueY);
  return Math.ceil(someRes) < WHEEL_RADIUS;
}

class Ball extends GameObject {
    constructor(indicator, idx) {
      super(indicator);
      this.mapDimensions = MAP_IMAGE[this.indicator];
      this.index = 0;
      this.dimension = this.mapDimensions[this.index];
      this.dx = 0;
      this.dy = 1;
      this.generateInitalPosition();
    }

    update() {
      if (this.y + BALL_WIDTH/2 + this.dy >= this.limY) {
        this.dy = -this.dy * friction;
      } else {
        this.dy += gravity;

        this.y += this.dy;
      }

      if (this.y < LIMIT_Y_MIN) {
        this.y = LIMIT_Y_MIN;
      }
      
    }

    draw() {
      this.update();
      const dimension = updateSpritePosition(this.dimension, this.x, this.y);
      SpriteRenderer(this.image, dimension); 
    }

  

    generateInitalPosition() {
      while(true) {
        const potentialX = Math.floor(Math.random() * (LIMIT_X_MAX - LIMIT_X_MIN + 1)) + LIMIT_X_MIN;
        const potentialY = Math.floor(Math.random() * (WHEEL_CENTER.y - LIMIT_Y_MIN + 1)) + LIMIT_Y_MIN;
        const limY = Math.floor(Math.random() * (385 - 365 + 1)) + 365;
        if (isPointInsideCircle(potentialX, potentialY) && isPointInsideCircle(potentialX, limY)) {
          this.x = potentialX;
          this.y = limY;
          this.limY = limY;
          break;
        }
      }
    }

    divert() {
      this.dy = - this.dy;
    }

    jump() {
      this.y = 240;
    }
  }