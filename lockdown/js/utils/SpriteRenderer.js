class SpriteRenderer {
  constructor(ctx) {
    this.ctx = ctx;
  }

  drawSprite(image, dimensions) {
    const {
      sourceX, sourceY, sourceWidth, sourceHeight, placeX, placeY, width, height,
    } = dimensions;
    this.ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight , placeX, placeY, width , height);
  }

}


class TextRenderer {
  constructor(ctx) {
    this.ctx = ctx;
  }
}