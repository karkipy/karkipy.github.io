
const BALL_SPEED = 0.9
class AnimatedBall extends GameObject {
    constructor(indicator, cb) {
      super(indicator);
      this.mapDimensions = MAP_IMAGE[this.indicator];
      this.index = 0;
      this.dimension = this.mapDimensions[this.index];
      this.x = WHEEL_CENTER.x + 10;
      this.y = LIMIT_Y_MAX + 10;
      this.dx = 0;
      this.dy = 1;
      this.cb = cb;
      this.enable = false;
    }
    reset() {
        this.x = WHEEL_CENTER.x + 10;
        this.y = LIMIT_Y_MAX + 10;
    }

    draw() {
     if (!this.enable) return;
     if (this.y < 430) {
        this.y += BALL_SPEED;
        if (this.y >= 405) {
          this.x -= BALL_SPEED;
        }
     } else if (this.x > 300){
        this.x -= BALL_SPEED;
     } else {
        this.enable = false;
        this.reset();
        if (this.cb) {
            this.cb();
        }
     }
      const dimension = updateSpritePosition(this.dimension, this.x, this.y);
      SpriteRenderer(this.image, dimension); 
    }

    animateBall() {
        this.enable = true;
    }
  }