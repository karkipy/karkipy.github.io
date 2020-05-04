class Player extends SpriteRender{
  constructor(ctx) {
    super(ctx);
    this.ctx = ctx;
    this.indicator = PLAYER_INDICATOR;
    this.image = loadedImages[this.indicator];
    this.width = 32;
    this.height = 40;
    this.x = 0;
    this.playerLevel = SCREEN_HEIGHT - tileHeight - this.height;
    this.playerMaxY = SCREEN_HEIGHT - tileHeight - this.height - 80;
    this.y = this.playerLevel;
    this.dimension = SPRITE_MAPPER[this.indicator];
    this.dx = 3;
    this.gravity = 2;
    this.descent = false;
    this.minX = 0;
  }

  updatePlayerYPos() {
    this.y += this.gravity
  }

  draw() {
    const dimension = updateSpritePosition(this.dimension, this.x, this.y, this.width, this.height);
    this.drawSprite(this.image, dimension);
    if (this.y < this.playerLevel) {
      this.updatePlayerYPos();
    } else {
      this.descent =false;
    }
  }

  updateMinX(minX) {
    this.minX = minX;
  }

  onMove(keyCode) {
    if(!keyCode.length) return;

    keyCode.forEach((key) => {
      const move = moveMapper[key];
      switch(move) {
        case 'RIGHT':
          this.x += this.dx;
          break;
        case 'LEFT':
          if (this.x - this.dx > this.minX) {
            this.x -= this.dx;
          }
          break;
        case 'UP':
          if (!this.descent) {
            this.y -= 10;
          }
          if (this.y <= this.playerMaxY) {
            this.descent = true;
          }
          break;
        default:
          return;
      }

    })
  }

  getX() {
    return this.x;
  }

  getDx() {
    return this.dx;
  }
}