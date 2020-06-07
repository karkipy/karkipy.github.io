class Game {
  constructor(ctx) {
    this.gameScreen = [
      { key: 'menu', item: new Menu(ctx) },
      { key: 'gamecontroller', item: new GameController(ctx) },
    ];
    this.currentItem = this.gameScreen[1];
    this.duration = 1;
    this.background = new Background(ctx, 1);
  }


  draw() {
    this.background.draw();
    this.currentItem.item.draw();
  }

  updateDuration() {
    this.background.updateDuration(this.duration);
  }

  updateKey(key) {
    const move = moveMapper[key];
    const startGame = this.currentItem.key === 'menu' ?  this.currentItem.item.getCursorPosition() === 1 : false;
    if (move === ENTER && startGame) {
      this.currentItem = this.gameScreen[1];
    }
    this.currentItem.item.updateKey(key);
  }

  removeKey(key) {
    this.currentItem.item.removeKey(key);
  }

}