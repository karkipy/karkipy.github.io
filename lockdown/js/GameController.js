class GameController {
  constructor(ctx) {
    this.ctx = ctx;
    this.durations = durations;
    this.background = new Background(ctx, this.durations);
    this.x = 0;
    this.y = 0;
    this.tile = new Tile(ctx);
    this.player = new Player(ctx);
    this.key = [];
    // update bots and sidekick for the first level
    // this.updateBots()
  }


  drawIntro() {

  }

  removeKey(key) {
    this.key = this.key.filter(f => f !== key);
  }


  updateKey(key) {
    if (!this.key.includes(key)) {
      this.key = [ ...this.key, key];
    }
    if (moveMapper[key] === 'RIGHT') this.updateBackground();
  }

  draw() {
    this.background.draw();
    this.tile.draw();
    this.player.onMove(this.key);
    this.player.draw();
  }


  updateBackground() {
    const playerX = this.player.getX();
    const centerpos = (this.x + SCREEN_WIDTH) / 2;
    const playerSpeed = this.player.getDx();
    if (playerX > centerpos) {
      this.ctx.translate(-playerSpeed * 2, this.y)
      this.x += playerSpeed;
      this.player.updateMinX(this.x*2)
    }
  }


}
