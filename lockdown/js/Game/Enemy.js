class Enemy extends SpriteRenderer {
  constructor(ctx) {
    super(ctx);
    this.image = loadedImages[ENEMY_SPRITE_INDICATOR];
    this.worldXStart = 0;
    this.worldXEnd = this.worldXStart + SCREEN_WIDTH;
  }

  updateWorldDimension(startXpos) {
    this.worldXStart = startXpos;
    this.worldXEnd = startXpos + SCREEN_WIDTH;
  }

  attachMap(map) {
    this.map = map;
  }

}

class Corona extends Enemy {
  constructor(ctx, x, y) {
    super(ctx);
    this.x = x;
    this.y = y;
    this.width = 32;
    this.height= 32;
    this.dimension = SPRITE_MAPPER[CORONA_INDICATOR];
    this.animationid = 0;
    this.animationLimit = 1;
    this.lowerLimitY = this.y + 10;
    this.upperLimitY = this.y - 10;
    this.direction = 1;
    this.visibile = false;
  }

  checkVisibility() {
    const checkPos = this.x + this.width /2;
    if (this.worldXStart < checkPos && checkPos < this.worldXEnd) {
      this.visibile = true;
      // playAudio(RAP_INDICATOR);
    }
    if (this.worldXStart > checkPos) {
      this.visibile = false;
      // stopAudio(RAP_INDICATOR);
    }

  }

  draw() {
    this.checkVisibility();

    if (this.visibile) {
      // go up
      if (this.y >= this.lowerLimitY) this.direction = -1;
      // go down
      if (this.y <= this.upperLimitY) this.direction = 1;
      if (this.animationid % this.animationLimit === 0) {
        this.y += this.direction;
        this.x -= 1;
      }
      const dimension = updateSpritePosition(this.dimension, this.x, this.y);
      this.drawSprite(this.image, dimension);
      this.animationid += 1;
    }

  }
}


const enemyDirection = {
  [RIGHT]: 1,
  [LEFT]: -1,
}

class Police extends Enemy {
  constructor(ctx, x, y, direction){
    super(ctx);
    this.dimension = SPRITE_MAPPER[POLICE_INDICATOR];
    this.x = x;
    this.type = WALK;
    this.direction = RIGHT;
    this.spriteIndex = 0;
    this.animationLimit = 10;
    this.animationid = 0;
    this.y = this.getYPos();
    this.dx = enemyDirection[this.direction];
    this.idle = false;
    this.idleLimit = 100;
    this.idleAnimationId = 0;
    this.maxX = this.x + this.width;
    this.minX = this.x -  this.width;

  }

  attachMap(map) {
    this.map = map;
    this.updateMinMaxX();
  }

  updateMinMaxX() {
    const index = this.map.findIndex(({ x }) => {
      return this.x < x;
    });
    this.maxX = this.map[index].x;
    this.minX = this.map[index - 1].x;
  }



  getYPos() {
    const { height, width } = this.dimension[this.type][this.direction][this.spriteIndex];
    this.height = height;
    this.width = width;
    return SCREEN_HEIGHT - GROUND_HEIGHT - height;
  }


  getCurrentDimension() {
    const dimension = this.dimension[this.type][this.direction][this.spriteIndex];
    return updateSpritePosition(dimension, this.x, this.y);
  }

  switchDirection() {
    if (this.idle) {
      // only check if police is idle
      if (this.idleAnimationId > this.idleLimit) {
        this.idle = false;
        if (this.direction === RIGHT) {
          this.direction = LEFT;
        } else {
          this.direction = RIGHT;
        }
        this.spriteIndex = 0;
        this.animationLimit = 10;
        this.idleAnimationId = 0;
        this.type = WALK;
        this.dx = enemyDirection[this.direction];
        this.y = this.getYPos();
      }
      this.idleAnimationId += 1;
    }

  }

  checkPlayerStatus() {
    if (this.direction === RIGHT) {
      if (this.x+ this.width > this.maxX && this.type === WALK) {
        this.type = IDLE;
        this.spriteIndex = 0;
        this.animationLimit = 15;
        this.y = this.getYPos();
        this.idle = true;
      }
    } else {
      if (this.x+ this.dx < this.minX && this.type === WALK) {
        this.type = IDLE;
        this.spriteIndex = 0;
        this.animationLimit = 15;
        this.y = this.getYPos();
        this.idle = true;
      }
    }
    this.switchDirection();
  }


  cleanUp() {
    if (this.animationid % this.animationLimit === 0) {
      this.spriteIndex = (this.spriteIndex + 1) % this.dimension[this.type][this.direction].length;
    }
    this.animationid += 1;
    if (this.type === WALK) {
      this.x += this.dx;
    }
  }


  draw() {
    this.checkPlayerStatus();
    const dimension = this.getCurrentDimension();
    this.drawSprite(this.image, dimension);
    this.cleanUp();
  }
}