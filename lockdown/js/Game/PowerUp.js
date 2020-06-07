class PowerUp {
  constructor(ctx, x, y, type) {
    this.ctx = ctx;
    this.type = type;
    this.x = x;
    this.y = y;
    this.image = loadedImages[this.type];

  }

  updatePos(x) {
    this.x = x;
  }

  draw() {

  }
}