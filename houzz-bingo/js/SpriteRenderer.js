function SpriteRenderer(image, dimensions) {
  const {
    sourceX, sourceY, sourceWidth, sourceHeight, placeX, placeY, width, height,
  } = dimensions;
  ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight , placeX, placeY, width , height);
}