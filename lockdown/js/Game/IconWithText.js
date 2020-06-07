class IconWithText {
  constructor(ctx, text, indicator, x, y) {
    this.ctx = ctx;
    this.text = text;
    this.indicator = indicator;
    this.image = loadedImages[this.indicator];
    this.dimension = SPRITE_MAPPER[this.indicator];
    // const { width, x, y } = this.dimension;
    // this.width = width;
    // this.x = x;
    // this.y = y;
  }

  draw() {
    this.ctx.drawImage(this.image, this.x, this.y);
    this.ctx.drawText(this.text, this.x + this.width, this.y);
  }

  updateXPos(x) {
    this.x = x;
  }

  updateText(text) {
    this.text = text;
  }
}