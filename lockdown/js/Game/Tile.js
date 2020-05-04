class Tile extends SpriteRender{
  constructor(ctx) {
    super(ctx);
    this.ctx = ctx;
    this.indicator = GAME_TILES_INDICATOR;
    this.image = loadedImages[this.indicator];
    this.dimension = SPRITE_MAPPER[this.indicator];
  }

  draw() {
    // renderSprite(this.image, this.dimension[LEFT]);
    let prev = 0;
    LEVEL_MAPPER.forEach((tile) => {
      const { type, width } = tile;
      if (this.dimension[type]) {
        const dimension = updateSpritePosition(this.dimension[type], prev, null, width);
        this.drawSprite(this.image, dimension);
      }
      prev+= width;
    });

  }
}