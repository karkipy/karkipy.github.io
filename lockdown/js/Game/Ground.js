class Ground {
  constructor(ctx) {
    this.ctx = ctx;
    this.color = '#A0BCCC';
    this.height = GROUND_HEIGHT;

  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(0, SCREEN_HEIGHT- this.height, SCREEN_WIDTH * levelDurations, this.height);
  }
}