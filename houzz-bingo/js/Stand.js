class Stand extends GameObject {
    constructor(indicator) {
      super(indicator);
      this.mapDimensions = MAP_IMAGE[this.indicator];
      this.index = 0;
    }

    draw() {
      SpriteRenderer(this.image, this.mapDimensions[this.index]); 
  
    }
  }