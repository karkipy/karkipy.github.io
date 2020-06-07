const getGameObstacles = (ctx) => {
  return [
    new Box(ctx, 1000, [[0, 1], [1, 1]]),
    new Car(ctx, 1350, 0),
    new Cone(ctx, 1455),
    new Cone(ctx, 1789),
    new Car(ctx, 1972, 1),
    new Cone(ctx, 2082),
    new Box(ctx, 2213, [[0, 1, 1], [1, 1, 1]]),
    new Car(ctx, 2523, 0),
    new Car(ctx, 2972, 1),
    new Cone(ctx, 3139),
    new Box(ctx, 3279, [[1, 0], [1, 1]]),
    new Cone(ctx, 3419),
    new Car(ctx, 3520, 0),
    new Box(ctx, 4017, [[0,1,0], [1, 1, 1]]),
    new Cone(ctx, 4344),
    new Car(ctx, 4434, 1),
    new Box(ctx, 4672, [[0, 0, 1, 1], [0, 1, 1, 1], [1, 1, 1, 1]]),
  ];
}

class GameController {
  constructor(ctx) {
    this.ctx = ctx;
    this.levelDurations = levelDurations;
    this.background = new Background(ctx, this.levelDurations);
    this.x = 0;
    this.y = 0;
    this.ground = new Ground(ctx);
    this.player = new Player(ctx);
    this.key = [];
    this.gift = null;
    this.airplane = new AirPlane(ctx);
    this.house = new Building(ctx, 0, 15, false);
    this.office = new Building(ctx, 1, 5324, true);

    this.obstacles = getGameObstacles(ctx);
    this.airplane.setGiftCb(this.setGift.bind(this));
  }


  setGift() {
    if (this.airplane && !this.gift) {
      const { x, y } = this.airplane.getDirection();
      this.gift = new Gift(this.ctx, x, y);
    }
  }

  drawIntro() {
    this.airplane.draw();
    if (this.gift) {
      this.gift.draw();
    }

  }

  removeKey(key) {
    this.key = this.key.filter(f => f !== key);
  }


  updateKey(key) {
    if (!this.key.includes(key)) {
      this.key = [ ...this.key, key];
    }
    if (moveMapper[key] === 'RIGHT')  {
      this.x += 20;
      this.ctx.translate(-20, this.y);
    }
    if (moveMapper[key] === 'LEFT' && this.x >= 0) {
      this.x -= 20;
      this.ctx.translate(20, this.y);
    }
  }

  draw() {
    this.background.draw();
    this.ground.draw();
    this.house.draw();
    this.office.draw();
    this.obstacles.forEach((obs) => {
      obs.draw()
    })
    this.player.onMove(this.key);
    this.player.draw();
    // this.drawIntro();
  }


  updateBackground() {
    this.x -= 20;
    this.ctx.translate(this.x, this.y);
    // const playerX = this.player.getX();
    // const centerpos = (this.x + SCREEN_WIDTH) / 2;
    // const playerSpeed = this.player.getDx();
    // if (playerX > centerpos) {
    //   this.x += playerSpeed;
    //   this.player.updateMinX(this.x*2)
    // }
  }


}
