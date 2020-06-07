class Building extends SpriteRender {
  constructor(ctx, type, xPos, doorState) {
    super(ctx);
    this.image = loadedImages[GAME_UTIL_SPRITE_INDICATOR];
    this.type = type;
    this.floorHeight = 83;
    this.windowHeight = 49;
    this.floorX = xPos;
    this.floorY = SCREEN_HEIGHT - GROUND_HEIGHT - this.floorHeight;
    this.doorDimension = SPRITE_MAPPER[DOOR_INDICATOR];
    this.windowDimension = SPRITE_MAPPER[WINDOW_INDICATOR][type];
    this.topObjectDimension = SPRITE_MAPPER[BUILDING_TOP][type];
    this.floorDimension = SPRITE_MAPPER[BUILDING_INDICATOR][type];
    this.animationId = 0;
    this.doorState = doorState;

    this.firstWindowXpos = xPos + 30; // refrence from world layout
    this.secondWindowXpos = this.firstWindowXpos + 85; // refrence from world layout
    this.windowYPosDiff = 17;
    this.doorPosY = 270;

  }

  drawTop(y) {
    this.drawSprite(this.image, this.topObjectDimension);
  }

  drawFirstFloor() {
    const floorDimension = updateSpritePosition(this.floorDimension, this.floorX, this.floorY);
    this.drawSprite(this.image, floorDimension);
    const windowYPos = this.floorY + this.windowYPosDiff; // taken refrenece from figma
    const firstWindowDimension = updateSpritePosition(this.windowDimension, this.firstWindowXpos, windowYPos);
    this.drawSprite(this.image, firstWindowDimension);

    const doorDimension = updateSpritePosition(this.doorDimension[Number(this.doorState)], this.secondWindowXpos, this.doorPosY);
    this.drawSprite(this.image, doorDimension);

  }

  drawFloor(y) {
    const floorDimension = updateSpritePosition(this.floorDimension, this.floorX, y);
    this.drawSprite(this.image, floorDimension);

    const windowYPos = y + this.windowYPosDiff;

    const firstWindowDimension = updateSpritePosition(this.windowDimension, this.firstWindowXpos, windowYPos);
    this.drawSprite(this.image, firstWindowDimension);

    const secondWindowDimension = updateSpritePosition(this.windowDimension, this.secondWindowXpos, windowYPos);
    this.drawSprite(this.image, secondWindowDimension);
  }

  draw() {
    this.drawFirstFloor();
    this.drawFloor(this.floorY - this.floorHeight);
    this.drawFloor(this.floorY - this.floorHeight * 2);
    this.drawTop(this.floorY - this.floorHeight * 3);
  }

}