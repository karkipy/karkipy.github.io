class CoffinDance extends SpriteRenderer {
  constructor(ctx) {
    super(ctx);
    this.ctx;
    this.animationId = 0;
    this.image = loadedImages[GAME_UTIL_SPRITE_INDICATOR];
    this.skybackgroundDimension = SPRITE_MAPPER[BACKGROUND_SKY_INDICATOR];
    this.coffinDimension = SPRITE_MAPPER[COFFIN_INDICATOR];
    this.animationId = 0;
    this.x = 267;
    this.y = 40;
    this.groundYPos = 165;
    this.coffinDancerXLimit = 333;
    this.coffinDancerY = 67;
    this.coffinDancerX = 500;
    this.animationIndex = 0;
    this.animationLimit = 15;
    this.width = 267;
    this.height = 134;
    this.reachedDestination = false;
  }

  drawBackground() {
    const dimension = updateSpritePosition(this.skybackgroundDimension, 267, 40, this.width, this.height);
    this.drawSprite(this.image, dimension);
    this.ctx.fillStyle = '#A0BCCC';
    this.ctx.fillRect(this.x, this.groundYPos, 267, 8);
  }
  drawCoffinDancers() {
    const dimension = updateSpritePosition(this.coffinDimension[this.animationIndex], this.coffinDancerX, this.coffinDancerY);
    this.drawSprite(this.image, dimension);

    if (this.animationId % this.animationLimit === 0) {
      this.animationIndex = (this.animationIndex + 1) % this.coffinDimension.length;
    }

    if(this.coffinDancerX >= this.coffinDancerXLimit) {
      this.coffinDancerX -= 0.5;
    } else if(!this.reachedDestination) {
      this.reachedDestination = true;
    }
    this.animationId += 1;
  }

  draw() {
    this.drawBackground();
    this.drawCoffinDancers();
    this.drawBehind();
  }

  drawBehind() {
    this.ctx.fillStyle = '#111';
    this.ctx.fillRect(this.x + this.width, this.y, SCREEN_WIDTH, SCREEN_HEIGHT);
  }

  getDestinationReached() {
    return this.reachedDestination;
  }

}

class Busted {

}

class Wasted {

}

class GameOverMenu extends SpriteRenderer{
  constructor(ctx) {
    super(ctx);
    this.ctx = ctx;
    this.animationId = 0;
    this.cursorAnimatonId = 0;
    this.image = loadedImages[GAME_UTIL_SPRITE_INDICATOR];
    this.currentCursorPos = 1;
    this.cursorDimension = SPRITE_MAPPER[CURSOR_INDICATOR];
    this.cursorInterval = 25;
    this.cursorAnimate = false;
    this.cursorYDiff = 20;
    this.menuY = 200;
    this.menuYDiff = 40;
    this.menuItem = [
      {
        text: 'Play Again', key: 1,
      },
      {
        text: 'Menu', key: 2,
      }
    ];
    this.cursorXDiff = {
      1: 130,
      2: 70,
    };
  }


  drawMenuItem() {
    this.ctx.font = "24px gameFont";
    this.ctx.textAlign = "center";
    this.menuItem.forEach(({ text, key }) => {
      this.ctx.fillStyle = "white";
      if (this.currentCursorPos === key) {
        this.ctx.fillStyle = "#9B51E0";
      }
      this.ctx.fillText(text, SCREEN_WIDTH/ 2, this.menuY + key * this.menuYDiff);
    });
  }

  draw() {
    this.drawMenuItem();
    this.drawCursor();
  }

  drawCursor() {
    let cursorX = SCREEN_WIDTH/ 2 - this.cursorXDiff[this.currentCursorPos];
    let cursorY = this.currentCursorPos * this.menuYDiff + this.menuY - this.cursorYDiff;
    if (this.cursorAnimatonId % this.cursorInterval === 0 )  {
      this.cursorAnimate = !this.cursorAnimate;
    }
    if (this.cursorAnimate) {
      cursorX -= 10;
    };

    const dimension = updateSpritePosition(this.cursorDimension, cursorX, cursorY);
    this.drawSprite(this.image, dimension);
    this.cursorAnimatonId +=1;
  }

  increaseIndex() {
    this.currentCursorPos +=1;
    if (this.currentCursorPos > this.menuItem.length ) this.currentCursorPos = 1;
  }

  decreaseIndex() {
    this.currentCursorPos -= 1;
    if (this.currentCursorPos < 1) this.currentCursorPos = this.menuItem.length;
  }

}

class GameOver {
  constructor(ctx, type) {
    this.ctx = ctx;
    this.type = type;
    this.coffin = new CoffinDance(ctx);
    this.menu = new GameOverMenu(ctx);
    this.key = null;
    this.show = false;
  }

  drawBackground() {
    this.ctx.fillStyle = '#111';
    this.ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
  }

  draw() {
    this.drawBackground();
    if (this.show) {
      this.coffin.draw();
    }
    if (this.coffin.getDestinationReached()) {
      this.menu.draw();
    }
  }

  updateKey(key) {
    const move = moveMapper[key];

    if (move === RIGHT) this.show = true;
    // only available after menu is shown
    if (this.coffin.getDestinationReached()) {
      this.key = key;
      switch(move) {
        case UP:
          this.menu.decreaseIndex();
          break;
        case DOWN:
          this.menu.increaseIndex();
        default:
          break;
      }
    }
  }

  removeKey() {}

}