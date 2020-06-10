class Gift extends SpriteRenderer {
  constructor(ctx, x, y) {
    super(ctx);
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.image = loadedImages[GIFT_INDICATOR];
    this.opened = false;
    this.height = 32;
    this.width = 32;
    this.currentheightWidth = 16;
    this.giftDimension = SPRITE_MAPPER[GIFT_INDICATOR];
  }

  draw() {
    const dimension = updateSpritePosition(this.giftDimension, this.x, this.y, this.currentheightWidth, this.currentheightWidth);
    // this.drawSprite(this.image, dimension);
    // if(this.y < 305) {
    //   this.y += 3;

    // }
    // if (this.currentheightWidth <  this.height) {
    //   this.currentheightWidth += 0.18;
    // } else {
    //   this.currentheightWidth = 32;
    // }

  }
}