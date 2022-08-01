class TV extends GameObject {
    constructor(indicator, cb) {
        super(indicator);
        this.mapDimensions = MAP_IMAGE[this.indicator];
        this.index = 0;
        this.animated = false;
        this.text = 'hi';
        this.animatedId = 0;
        this.cbCall = false;
        this.cb = cb;
    }

    draw() {
        SpriteRenderer(this.image, this.mapDimensions[this.index]); 
        if (!this.animated) return;
        ctx.font = "30px gameFont";
        ctx.fillStyle = "white";
        const x = this.text.length >1 ? 240: 252;
        if (this.animatedId < 150) {
            if (Math.floor(this.animatedId / 15) % 2 === 0) {
                ctx.fillText(this.text, x, 350);
            }
        } else {
            ctx.fillText(this.text, x, 350);
            if (this.cbCall && this.cb) {
                this.cbCall = false;
                this.cb()
            }
        }

        this.animatedId ++;
    }

    animate(text) {
        this.text = text;
        playAudio(this.indicator);
        this.animated = true;
        this.animatedId = 0;
        this.cbCall = true;
    }
}