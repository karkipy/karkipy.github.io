class Background extends SpriteRender {
  constructor(ctx, durations) {
    super(ctx);
    this.indicator = BACKGROUND_SKY_INDICATOR;
    this.image = loadedImages[this.indicator];
    this.dimension = SPRITE_MAPPER[this.indicator];
    this.durations = durations;
  }

  draw() {
    for (let i = 0; i < this.durations; i++) {
      const currentDimension = updateSpritePosition(this.dimension, i * SCREEN_WIDTH);
      this.drawSprite(this.image, currentDimension);
    }
  }
}