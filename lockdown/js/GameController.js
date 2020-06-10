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
};

const getEnemeies = (ctx) => {
  return [
    // new Corona(ctx, 1071, 270),
    new Police(ctx, 1200, 285, RIGHT),
    new Police(ctx, 1730, 285, RIGHT),
    new Police(ctx, 2734, 285, RIGHT),
    new Police(ctx, 2895, 285, LEFT),
    new Police(ctx, 3079, 285, LEFT),
    new Police(ctx, 3985, 285, RIGHT),
    new Police(ctx, 4178, 285, RIGHT),
  ];
};


const getGameMap = (obstacles=[]) => {
  let map = [{ x: 0, y: SCREEN_HEIGHT - GROUND_HEIGHT }];

  obstacles.forEach((obs, idx) => {
    const res = obs.getDimensionWithFollowUp();
    if (Array.isArray(res)) {
      map = [ ...map, ...res];
    } else {
      map = [...map, res];
    }
  });
  return map;
}

class GameController {
  constructor(ctx) {
    this.ctx = ctx;
    this.levelDurations = levelDurations;
    this.background = new Background(ctx, this.levelDurations);
    this.x = 0;
    this.y = 0;
    this.ground = new Ground(ctx);
    this.key = [];
    this.gift = null;
    this.airplane = new AirPlane(ctx);
    this.house = new Building(ctx, 0, 15, false);
    this.office = new Building(ctx, 1, 5324, true);
    this.obstacles = getGameObstacles(ctx);
    this.airplane.setGiftCb(this.setGift.bind(this));
    this.map = getGameMap(this.obstacles);
    this.player = new Player(ctx);
    this.enemies = getEnemeies(ctx);
    this.enemies.forEach((em) => {
      em.attachMap(this.map);
    });
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
    this.player.onKeyRemoved(key);
  }


  updateKey(key) {
    if (!this.key.includes(key)) {
      // dont over populate
      this.key = [ ...this.key, key];
    }
    this.player.onKeyPressed(key);
  }

  draw() {
    this.background.draw();
    this.ground.draw();
    this.house.draw();
    this.office.draw();
    this.obstacles.forEach((obs) => {
      obs.draw()
    });

    this.enemies.forEach((enemy) => {
      enemy.draw();
    })
    this.player.draw();
    this.updateBackground();
    // this.drawIntro();
  }


  updateBackground() {
    const playerX = this.player.getX();
    const centerpos = this.x + SCREEN_WIDTH / 2;
    const playerSpeed = this.player.getDx();
    if (playerX > centerpos) {
      this.x += playerSpeed;
      this.player.updateMinX(this.x);
      this.ctx.translate(-playerSpeed, this.y);
    }

    this.enemies.forEach((enemy) => {
        enemy.updateWorldDimension(this.x);
      });
  }


}
