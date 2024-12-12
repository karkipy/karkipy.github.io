
var Fire = function () {
	this.canvas = document.getElementById("gameCanvas");
	this.ctx = this.canvas.getContext("2d");


	this.aFires = [];
	this.aSpark = [];
	this.aSpark2 = [];

	this.mouse = {
		x: this.canvas.width * 0.5,
		y: this.canvas.height * 0.75
	};

	this.init();
};
Fire.prototype.init = function () {
	this.canvas.addEventListener("mousemove", this.updateMouse.bind(this), false);
};
Fire.prototype.run = function () {
	this.update();
	this.draw();

	if (this.bRuning) requestAnimationFrame(this.run.bind(this));
};
Fire.prototype.start = function () {
	this.bRuning = true;
	this.run();
};
Fire.prototype.stop = function () {
	this.bRuning = false;
};
Fire.prototype.update = function () {
	this.aFires.push(new Flame(this.mouse));
	this.aSpark.push(new Spark(this.mouse));
	this.aSpark2.push(new Spark(this.mouse));

	for (var i = this.aFires.length - 1; i >= 0; i--) {
		if (this.aFires[i].alive) this.aFires[i].update();
		else this.aFires.splice(i, 1);
	}

	for (var i = this.aSpark.length - 1; i >= 0; i--) {
		if (this.aSpark[i].alive) this.aSpark[i].update();
		else this.aSpark.splice(i, 1);
	}

	for (var i = this.aSpark2.length - 1; i >= 0; i--) {
		if (this.aSpark2[i].alive) this.aSpark2[i].update();
		else this.aSpark2.splice(i, 1);
	}
};

Fire.prototype.draw = function () {
	for (var i = this.aFires.length - 1; i >= 0; i--) {
		this.aFires[i].draw(this.ctx);
	}

	for (var i = this.aSpark.length - 1; i >= 0; i--) {
		if (i % 2 === 0) this.aSpark[i].draw(this.ctx);
	}



	for (var i = this.aSpark2.length - 1; i >= 0; i--) {
		this.aSpark2[i].draw(this.ctx);
	}
};

Fire.prototype.updateMouse = function (e) {
	this.mouse.x = e.clientX;
	this.mouse.y = e.clientY;

	//this.aFires.push( new Flame( this.mouse ) );
};

var Flame = function (mouse) {
	this.cx = 450;
	this.cy = 400;
	this.x = rand(this.cx - 25, this.cx + 25);
	this.y = rand(this.cy - 5, this.cy + 5);
	this.vy = rand(1, 3);
	this.vx = rand(-1, 1);
	this.r = rand(20, 20);
	this.life = rand(3, 6);
	this.alive = true;
	this.c = {
		h: Math.floor(rand(2, 40)),
		s: 100,
		l: rand(80, 100),
		a: 0,
		ta: rand(0.8, 0.9)
	};
};
Flame.prototype.update = function () {
	this.y -= this.vy;
	this.vy += 0.05;

	this.x += this.vx;

	if (this.x < this.cx) this.vx += 0.1;
	else this.vx -= 0.1;

	if (this.r > 0) this.r -= 0.1;

	if (this.r <= 0) this.r = 0;

	this.life -= 0.15;

	if (this.life <= 0) {
		this.c.a -= 0.05;

		if (this.c.a <= 0) this.alive = false;
	} else if (this.life > 0 && this.c.a < this.c.ta) {
		this.c.a += 0.08;
	}
};
Flame.prototype.draw = function (ctx) {
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.r * 3, 0, 2 * Math.PI);
	ctx.fillStyle =
		"hsla( " +
		this.c.h +
		", " +
		this.c.s +
		"%, " +
		this.c.l +
		"%, " +
		this.c.a / 20 +
		")";
	ctx.fill();

	ctx.beginPath();
	ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
	ctx.fillStyle =
		"hsla( " +
		this.c.h +
		", " +
		this.c.s +
		"%, " +
		this.c.l +
		"%, " +
		this.c.a +
		")";
	ctx.fill();
};

var Spark = function (mouse) {
    this.cx = 450;
	this.cy = 400;
	this.x = rand(this.cx - 40, this.cx + 40);
	this.y = rand(this.cy, this.cy + 5);
	this.lx = this.x;
	this.ly = this.y;
	this.vy = rand(1, 3);
	this.vx = rand(-4, 4);
	this.r = rand(0, 1);
	this.life = rand(4, 5);
	this.alive = true;
	this.c = {
		h: Math.floor(rand(2, 40)),
		s: 100,
		l: rand(40, 100),
		a: rand(0.8, 0.9)
	};
};
Spark.prototype.update = function () {
	this.lx = this.x;
	this.ly = this.y;

	this.y -= this.vy;
	this.x += this.vx;

	if (this.x < this.cx) this.vx += 0.2;
	else this.vx -= 0.2;

	this.vy += 0.08;
	this.life -= 0.1;

	if (this.life <= 0) {
		this.c.a -= 0.05;

		if (this.c.a <= 0) this.alive = false;
	}
};
Spark.prototype.draw = function (ctx) {
	ctx.beginPath();
	ctx.moveTo(this.lx, this.ly);
	ctx.lineTo(this.x, this.y);
	ctx.strokeStyle =
		"hsla( " +
		this.c.h +
		", " +
		this.c.s +
		"%, " +
		this.c.l +
		"%, " +
		this.c.a / 2 +
		")";
	ctx.lineWidth = this.r * 2;
	ctx.lineCap = "round";
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(this.lx, this.ly);
	ctx.lineTo(this.x, this.y);
	ctx.strokeStyle =
		"hsla( " +
		this.c.h +
		", " +
		this.c.s +
		"%, " +
		this.c.l +
		"%, " +
		this.c.a +
		")";
	ctx.lineWidth = this.r;
	ctx.stroke();
	ctx.closePath();
};

rand = function (min, max) {
	return Math.random() * (max - min) + min;
};



let oCanvas = new Fire();



let snowflakes = [];
let count = window.innerWidth / 8; // Augmente légèrement le nombre de flocons
snowflakes = [];
for (let i = 0; i < count; i++) {
	snowflakes.push(new Snowflake());
}




// Flocon de neige
function Snowflake() {
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.radius = Math.random() * 4 + 1; // Taille variable (1 à 5 pixels)
    this.speedX = Math.random() * 1 - 0.5; // Déplacement latéral aléatoire
    this.speedY = Math.random() * 3 + 1; // Vitesse de chute (1 à 4)
    this.opacity = Math.random() * 0.5 + 0.3; // Légère transparence
    this.swing = Math.random() * 2; // Mouvement en oscillation
    this.swingSpeed = Math.random() * 0.05 + 0.02; // Vitesse d'oscillation
    this.angle = Math.random() * Math.PI * 2; // Angle initial
}

Snowflake.prototype.update = function () {
    this.angle += this.swingSpeed; // Mise à jour de l'angle pour l'oscillation
    this.x += Math.cos(this.angle) * this.swing + this.speedX; // Oscillation + déplacement latéral
    this.y += this.speedY; // Chute

    // Remet le flocon au sommet s'il sort par le bas
    if (this.y > window.innerHeight) {
        this.y = 0;
        this.x = Math.random() * window.innerWidth;
    }

    // Gère les flocons sortant latéralement
    if (this.x > window.innerWidth) {
        this.x = 0;
    }
    if (this.x < 0) {
        this.x = window.innerWidth;
    }
};

Snowflake.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

    let gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 2);
    gradient.addColorStop(0, 'rgba(255, 255, 255,' + this.opacity + ')');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.fillStyle = gradient;
    ctx.fill();
};


    // Flocons de neige




class Background extends GameObject {
    constructor(indicator, cb) {
        super(indicator);
        this.mapDimensions = MAP_IMAGE[this.indicator];
    }

    draw() {

        SpriteRenderer(this.image, this.mapDimensions[0]); 
        oCanvas.draw()
        oCanvas.update();
		snowflakes.forEach((flake) => {
			flake.update();
			flake.draw();
		});
	
    }
}