class Obstacle extends SpriteRenderer {
  constructor(ctx) {
    super(ctx);
    this.image = loadedImages[GAME_UTIL_SPRITE_INDICATOR];
  }

  draw() {
    this.drawSprite(this.image, this.dimension);
  }

  getDimensionWithFollowUp() {
    // returns array always
    return [{ x: this.x, y: this.y  }, { x: this.x + this.width, y: SCREEN_HEIGHT - GROUND_HEIGHT }];
  }
}

class Car extends Obstacle{
  constructor(ctx, xPos, type) {
    super(ctx);
    this.width = 100;
    this.height = 64;
    this.x = xPos;
    this.y = 272; // baseHeight
    this.type = type;
    const dimension = SPRITE_MAPPER[OBSTACLE_INDICATOR][type];
    this.dimension = updateSpritePosition(dimension, this.x, this.y);
  }
}

class Cone extends Obstacle{
  constructor(ctx, xPos) {
    super(ctx);
    this.width = 32;
    this.height = 32;
    this.x = xPos;
    this.y = 304; // baseHeight
    this.type = 2; // 2 represents cone
    const dimension = SPRITE_MAPPER[OBSTACLE_INDICATOR][this.type];
    this.dimension = updateSpritePosition(dimension, this.x, this.y);
  }
}


class Box extends Obstacle{
  constructor(ctx, x, matrix = [[]]) {
    super(ctx);
    this.width = 32;
    this.height = 32;
    this.type = 3; // 3 for box
    this.matrix = matrix;
    this.x = x;
    this.y = 304;
    this.startY = this.y  - this.width * (this.matrix.length - 1) ;
    this.dimension = SPRITE_MAPPER[OBSTACLE_INDICATOR][this.type];
  }

  draw() {
    this.matrix.forEach((mat, heightIdx) => {
      mat.forEach((m, idx) => {
        if (m) {
          const x = this.x + idx * this.width;
          const y = this.startY + heightIdx * this.height;
          const dimension = updateSpritePosition(this.dimension, x, y);
          this.drawSprite(this.image, dimension);
        }
      });
    });
  }

  getDimensionWithFollowUp() {
    const singularMatirx = this.matrix.reduce((r, a) => a.map((b, i) => (r[i] || 0) + b), []);
    const dimension = singularMatirx.map((m, idx) => {
      const x = this.x + idx * this.width;
      const y = this.y - (m - 1) * this.height;
      return {
        x,
        y,
      }
    });
    return [...dimension, { x: this.x + dimension.length * this.width, y: SCREEN_HEIGHT - GROUND_HEIGHT }];
  }
}

