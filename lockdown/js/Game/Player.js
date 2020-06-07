class Player extends SpriteRender{
  constructor(ctx) {
    super(ctx);
    this.ctx = ctx;
    this.type = NORMAL;
    this.direction = RIGHT;
    this.indicator = PLAYER_SPRITE_INDICATOR;
    this.image = loadedImages[this.indicator];
    this.height = 49;
    this.dimensions = SPRITE_MAPPER[PLAYER_SPRITE_INDICATOR];
    this.playerLevel = SCREEN_HEIGHT  - this.height - GROUND_HEIGHT;
    this.playerMaxY = SCREEN_HEIGHT  - this.height - GROUND_HEIGHT - 100;
    this.x = 20;
    this.y = this.playerLevel;
    this.dimension = SPRITE_MAPPER[this.indicator];
    this.dx = 3;
    this.gravity = 4;
    this.descent = false;
    this.minX = 0;
    this.powerUp = null;
    this.spriteIndex = 0;
    this.animationId = 0;
    this.animationLimit = 10;
  }

  updatePlayerYPos() {
    this.y += this.gravity
  }

  draw() {
    const curPosDimension = this.dimension[this.type][this.direction];
    const dimension = updateSpritePosition(curPosDimension[this.spriteIndex % curPosDimension.length], this.x, this.y, this.width, this.height);
    this.drawSprite(this.image, dimension);
    // if (this.y < this.playerLevel) {
    //   this.updatePlayerYPos();
    // } else {
    //   this.descent =false;
    // }
    // if(this.animationId % this.animationLimit === 0) {
    //   // this.spriteIndex += 1;
    // }
    // this.animationId +=1;
  }

  updateMinX(minX) {
    this.minX = minX;
  }

  updateCheck() {
    switch(this.type) {
      case NORMAL:
        this.animationLimit = 10;
        break;
      case WALK:
        this.animationLimit = 5;
        break;
      default:
        break;
    }
  }

  onMove(keyCode) {
    // if(!keyCode.length)  {
    //   this.type = NORMAL;
    // };
    // keyCode.forEach((key) => {
    //   const move = moveMapper[key];
    //   switch(move) {
    //     case 'RIGHT':
    //       this.x += this.dx;
    //       this.direction = move;
    //       break;
    //     case 'LEFT':
    //       if (this.x - this.dx > this.minX) {
    //         this.x -= this.dx;
    //       }
    //       this.direction = move;
    //       break;
    //     case 'UP':
    //       this.type = JUMP;
    //       if (!this.descent) {
    //         this.y -= 10;
    //       }
    //       if (this.y <= this.playerMaxY) {
    //         this.descent = true;
    //       }
    //       break;
    //     default:
    //       return;
    //   }
    // });
    // this.updateCheck();
  }

  getX() {
    return this.x;
  }

  getDx() {
    return this.dx;
  }
}