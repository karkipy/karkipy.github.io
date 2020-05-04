function renderSprite(image, dimensions) {
  const {
    sourceX, sourceY, sourceWidth, sourceHeight, placeX, placeY, width, height,
  } = dimensions;
  ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight , placeX, placeY, width , height);
}

class SpriteRender {
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