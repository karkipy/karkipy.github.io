class Menu extends SpriteRenderer{
  constructor(ctx) {
    super(ctx);
    this.ctx = ctx;
    this.key = null;
    this.image = loadedImages[GAME_UTIL_SPRITE_INDICATOR];
    this.cursorDimension = SPRITE_MAPPER[CURSOR_INDICATOR];
    this.logoDimension =  SPRITE_MAPPER[LOGO_INDICATOR];
    this.menuItem = [
      {
        text: 'Start', key: 1,
      },
      {
        text: 'Help', key: 2,
      },
      {
        text: 'credits', key: 3,

      },
      {
        text: 'covid-19', key: 4,

      }
    ];
    this.currentCursorPos = 1;
    this.cursorYDiff = 20;
    this.menuY = 130;
    this.menuYDiff = 50;
    this.cursorXDiff = {
      1: 80,
      2: 70,
      3: 100,
      4: 110,
    };
    this.cursorAnimatonId = 0;
    this.cursorInterval = 25;
    this.cursorAnimate = false;
  }

  draw() {
    this.drawSprite(this.image, this.logoDimension);
    this.drawMenuItem();
    this.drawCursor();
  }

  drawMenuItem() {
    this.ctx.font = "24px gameFont";
    this.ctx.textAlign = "center";
    this.menuItem.forEach(({ text, key }) => {
      this.ctx.fillStyle = "black";
      if (this.currentCursorPos === key) {
        this.ctx.fillStyle = "#9B51E0";
      }
      this.ctx.fillText(text, SCREEN_WIDTH/ 2, this.menuY + key * this.menuYDiff);
    });
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

  updateKey(key) {
    this.key = key;
    const move = moveMapper[key];
    switch(move) {
      case UP:
        this.currentCursorPos -= 1;
        if (this.currentCursorPos < 1) this.currentCursorPos = this.menuItem.length;
        break;
      case DOWN:
        this.currentCursorPos +=1;
        if (this.currentCursorPos > this.menuItem.length ) this.currentCursorPos = 1;
      default:
        break;
    }
  }

  getCursorPosition() {
    return this.currentCursorPos;
  }

  removeKey() {
    this.key = null;
  }
}