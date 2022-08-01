class GameObject {
  constructor(indicator) {
    this.indicator = indicator;
  }
  setImage() {
    this.image = loadedImages[this.indicator];
  }
}