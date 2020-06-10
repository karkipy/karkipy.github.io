const playerDx = {
  [LEFT]: -2,
  [RIGHT]: 2
};

const isHorizontal = (val) => val === LEFT || val === RIGHT;

class Player extends SpriteRenderer{
  constructor(ctx) {
    super(ctx);
    this.ctx = ctx;
    this.type = IDLE;
    this.direction = RIGHT;
    this.indicator = PLAYER_SPRITE_INDICATOR;
    this.dimension = SPRITE_MAPPER[this.indicator];
    this.spriteIndex = 0;
    this.image = loadedImages[this.indicator];
    this.height = this.getPlayerCurrentHeight();
    this.playerYLevel = this.getPlayerGroundPos();
    this.playerMaxY = this.playerLevel;
    this.x = 20;
    this.y = this.playerYLevel;
    this.dx = 3;
    this.gravity = 3;
    this.descent = false;
    this.minX = 0;
    this.powerUp = null;
    this.animationid = 0;
    this.animationLimit = 10;
    this.moves = [];
  }

  updatePlayerYPos() {
    this.y += this.gravity
  }

  getPlayerGroundPos() {
    // returns the y pos to which gravity can affect the player
    const dimension = this.dimension[this.type][this.direction][this.spriteIndex];
    return SCREEN_HEIGHT - GROUND_HEIGHT - dimension.height;
  }

  getPlayerCurrentHeight() {
    return this.dimension[this.type][this.direction][this.spriteIndex].height;
  }


  getCurrentDimension() {
    this.updateSpriteIndex();
    const dimension = this.dimension[this.type][this.direction][this.spriteIndex];
    return updateSpritePosition(dimension, this.x, this.y);
  }

  updateSpriteIndex() {
    this.spriteIndex = (this.spriteIndex) % this.dimension[this.type][this.direction].length;
  }



  groundMovement() {
    if (this.type === JUMP) {
      if (this.y - 1 > this.playerMaxY && !this.descent) {
        this.y -= 3;
        this.spriteIndex = 2;
      } else {
        this.descent = true;
      }

      if (this.y + 10 > this.playerYLevel) {
        this.spriteIndex = 0;
      }

      if(this.moves.length > 1) {
        this.x += this.dx;
      }


    } else {
      if (this.animationid % this.animationLimit === 0) {
        this.spriteIndex = (this.spriteIndex + 1) % this.dimension[this.type][this.direction].length;
      }
      this.animationid += 1;
      if (this.type === WALK) {
        let walk = true;
        if (this.direction === LEFT) {
          walk = this.x + this.dx > this.minX;
        }
        if (walk) this.x += this.dx;
      }
    }
  }

  cleanUp() {
    if (this.descent) {
      if (this.y + this.gravity <= this.playerYLevel) {
        this.y += this.gravity;
        this.spriteIndex = 2;
        if(this.moves.includes(LEFT) || this.moves.includes(RIGHT)) {
          this.x += this.dx;
        }

        if (this.y + 15 > this.playerYLevel) {
          this.spriteIndex = 0;
        }
      } else {
        this.descent = false;
      }
    } else {
      this.groundMovement();
    }


  }


  updateMinX(minX) {
    this.minX = minX;
  }

  updateProperties() {
    switch(this.type) {
      case IDLE:
        this.animationLimit = 12;
        break;
      case WALK:
        this.animationLimit = 8;
        break;
      case JUMP:
        this.animationLimit = 10;
        break;
      default:
        break;
      }
  }

  checkPlayerStatus() {
    // there can only be two state of move, i.e horizontal (left or right) and jump
    this.moves.forEach((v) => {
      this.type = WALK;
      switch(v) {
        case LEFT:
          this.direction = LEFT;
          this.dx = playerDx[this.direction];
          break;
        case RIGHT:
          this.direction = RIGHT;
          this.dx = playerDx[this.direction];
          break;
        default:
          break;
      }
    });
    if(this.moves.includes(UP)) {
      this.type = JUMP;
      this.playerMaxY = this.playerYLevel - 100;
      this.descent
    }
    if (!this.moves.length) {
      this.type = IDLE;
    }

    if (this.descent) {
      this.type = JUMP;
    }

    this.updateProperties();
  }


  draw() {
    this.checkPlayerStatus();
    const dimension = this.getCurrentDimension();
    this.drawSprite(this.image, dimension);
    this.cleanUp();
  }

  onKeyPressed(key) {
    const move = moveMapper[key];
    if (!this.moves.includes(move) && move) {
      if (isHorizontal(move)) {
          // check for pre existing horizontal move
          const searchKey = move === LEFT ? RIGHT : LEFT;
          const index = this.moves.indexOf(searchKey);
          this.moves = [...this.moves.slice(index + 1), move];
        }
      else if(!this.descent){
        this.moves = [ ...this.moves, move];
      }
    }
    // need to treat different for key pressed in case of player
  }

  onKeyRemoved(key) {
    const move = moveMapper[key];
    if (move === UP && !this.descent) {
      this.descent =  true;
    }
    if(move) {
      this.moves = this.moves.filter(m => m !== move);
    }
  }

  getX() {
    return this.x;
  }

  getDx() {
    return Math.abs(this.dx);
  }
}