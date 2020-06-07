class Mountain extends SpriteRender {
  constructor(ctx, type, x) {
    super(ctx);
    this.indicator = MOUNTAIN_INDICATOR;
    this.image = loadedImages[GAME_UTIL_SPRITE_INDICATOR];
    const mountainDimension = SPRITE_MAPPER[this.indicator][type];
    this.dimension = updateSpritePosition(mountainDimension, x);
  }

  draw() {
    this.drawSprite(this.image, this.dimension);
  }
}


class Sky extends SpriteRender {
  constructor(ctx, x) {
    super(ctx);
    this.indicator = BACKGROUND_SKY_INDICATOR;
    this.image = loadedImages[GAME_UTIL_SPRITE_INDICATOR];
    const dimension = SPRITE_MAPPER[this.indicator];
    this.dimension = updateSpritePosition(dimension, x);
  }

  draw() {
    this.drawSprite(this.image, this.dimension);
  }
}


class BillBoard extends SpriteRender {
  constructor(ctx, x) {
    super(ctx);
    this.x = x;
    this.indicator = BILL_BOARD_INDICATOR;
    this.image = loadedImages[GAME_UTIL_SPRITE_INDICATOR];
    const dimension = SPRITE_MAPPER[this.indicator];
    this.dimension = updateSpritePosition(dimension, x);
  }

  draw() {
    this.drawSprite(this.image, this.dimension)
  }
}


class Cloud extends SpriteRender {
  constructor(ctx, type, x, y) {
    super(ctx);
    this.indicator = CLOUD_INDICATOR;
    this.image = loadedImages[GAME_UTIL_SPRITE_INDICATOR];
    const dimension = SPRITE_MAPPER[this.indicator][type];
    this.dimension = updateSpritePosition(dimension, x, y);
  }

  draw() {
    this.drawSprite(this.image, this.dimension);
  }
}

function getRandomInt(max, min = 0) {
   return Math.floor(Math.random() * (max - min)) + min;
}


class Background extends SpriteRender {
  constructor(ctx, duration) {
    super(ctx);
    this.ctx = ctx;
    this.skyBackground = new Array(duration).fill(null).map((_, idx) => {
      return new Sky(ctx, idx * SCREEN_WIDTH);
    });
    this.mountains = [
      // map mountains as per level
      new Mountain(ctx, 0, 329),
      new Mountain(ctx, 1, 426),
      new Mountain(ctx, 0, 850),
      new Mountain(ctx, 1, 1219),
      new Mountain(ctx, 0, 1426),
      new Mountain(ctx, 0, 1829),
      new Mountain(ctx, 1, 2170),
      new Mountain(ctx, 1, 2638),
      new Mountain(ctx, 0, 3091),
      new Mountain(ctx, 0, 3383),
      new Mountain(ctx, 1, 3776),
      new Mountain(ctx, 1, 4259),
      new Mountain(ctx, 1, 4998),
      new Mountain(ctx, 0, 5181),
    ];

    this.clouds = new Array(20).fill(null).map((_, idx) => {
      const type = getRandomInt(2);
      const x = getRandomInt(SCREEN_WIDTH * duration, 0);
      const y = getRandomInt(64, 32);
      return new Cloud(ctx, type, x, y);
    });
    this.billBoards = [
      new BillBoard(ctx, 2890),
      new BillBoard(ctx, 5073),
    ];
    this.image = loadedImages[GAME_UTIL_SPRITE_INDICATOR];
    this.cardDimension = SPRITE_MAPPER[DAI_CAR_INDICATOR];


  }

  draw() {
    this.skyBackground.map((sky) => {
      sky.draw();
    });
    this.clouds.forEach((cloud) => {
      cloud.draw();
    })
    // this.drawSprite(this.image, this.dimension);
    this.mountains.forEach((mountain) => {
      mountain.draw();
    });

    this.billBoards.forEach((billboard) => {
      billboard.draw();
    });

    this.drawSprite(this.image, this.cardDimension);
  }
}