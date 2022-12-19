class Wheel extends GameObject {
  constructor(indicator, cb) {
    super(indicator);
    this.mapDimensions = MAP_IMAGE[this.indicator];
    this.index = 0;
    this.animIdTracker = 0;
    this.cb = cb;
    this.friction = 7;
    this.animate = false;
  }

  update() {
    if (this.friction >=7)  {
      this.animIdTracker = 0;
      if (this.cb && this.animate) {
        this.cb();
        this.animate = false;
      }
      return;
    };

    this.animIdTracker +=1;

    if (this.animIdTracker % this.friction === 0) {
      this.index = (this.index + 1) % this.mapDimensions.length;
    }

    if (this.animIdTracker % 50 == 0) {
      this.friction ++;
    }


  }

  draw() {
    this.update();
    SpriteRenderer(this.image, this.mapDimensions[this.index]);
  }

  spinTheWheel() {
    this.friction = 1;
    this.animIdTracker = 0;
    this.animate = true;
  }
}