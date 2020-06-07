class BannerItem {
  constructor(ctx, image, animated, startDx) {
    this.ctx = ctx;
    this.image = image;
    this.dx = 0;
    this.dy = startDx || 0;
    this.diffY = 1;
    this.animated = animated;
    this.animationId = 0;
    this.direction = [-1, 0, 1];
    this.animationInterval = 10;
  }

  draw(x, y) {
    if (this.animated) this.updateYPos();
    this.ctx.drawImage(this.image, x, y + this.dy * this.diffY);
  }

  updateYPos() {
    if (this.animationId % this.animationInterval === 0) {
      this.dy += 1;
      if (this.dy > 1) this.dy = -1;

    }

    this.animationId +=1;
  }
}


class Banner {
  constructor(ctx) {
    this.ctx = ctx;
    this.items = [
      new BannerItem(ctx,loadedImages[BANNER_START_INDICATOR]),
      new BannerItem(ctx,loadedImages[BANNER_FIRST_INDICATOR], true, -1),
      new BannerItem(ctx,loadedImages[BANNER_SECOND_INDICATOR], true, 0),
      new BannerItem(ctx,loadedImages[BANNER_THIRD_INDICATOR], true, 1),
      new BannerItem(ctx,loadedImages[BANNER_END_INDICATOR]),
    ];
    this.diffX = [ 0, 55, 107, 170, 185];
  }

  draw(startPosX, startPosY) {
    this.items.forEach((item, idx) => {
      const diffX = this.diffX[idx];
      item.draw(startPosX - diffX, startPosY);
    })
  }
}


class AirPlane {
  constructor(ctx, dropGiftCb) {
    this.ctx = ctx;
    this.planeImage = loadedImages[AIRPLANE_INDICATOR];
    this.banner = new Banner(ctx);
    this.x = 250;
    this.y = 10;
  }

  setGiftCb(dropGiftCb) {
    this.dropGiftCb = dropGiftCb;
  }

  draw() {
    this.dropGiftCb && this.dropGiftCb();
    if (this.x > SCREEN_WIDTH + 200) return;
    // this.ctx.drawImage(this.planeImage, this.x , this.y);
    // this.banner.draw(this.x, this.y);
    // this.x += 2;
  }

  getDirection() {
    return {
      x: this.x,
      y: this.y
    }
  }


}