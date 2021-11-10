/* ----------------- *\
   Modern Background  
      -----------
      @cuikho210
\* ----------------- */

class Bg {
    constructor (canvas, length, color) {
        this.length = length;
        this.dots = [];
        this.color = color;

        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');

        this.resize();
        this.onresize();
        this.createDots();
        this.loop();
    }

    resize () {
        this.width = this.canvas.clientWidth;
        this.height = this.canvas.clientHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    onresize () {
        window.addEventListener('resize', () => {
            this.resize();
        });
    }

    createDots () {
        for (let i = 0; i < this.length; i ++) {
            let speed = parseInt((Math.random() * 2) + 1);

            this.dots.push({
                x: parseInt(Math.random() * this.width),
                y: parseInt(Math.random() * this.height),
                speed: speed,
                speedX: speed * (((Math.random() * 2) - 1) > 0 ? 1 : -1),
                speedY: speed * (((Math.random() * 2) - 1) > 0 ? 1 : -1),
                r: parseInt((Math.random() * 5) + 2)
            });
        }
    }

    clear () {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    update () {
        for (let i = 0; i < this.length; i ++) {
            // Move
            this.dots[i].x += this.dots[i].speedX;
            this.dots[i].y += this.dots[i].speedY;

            if (this.dots[i].x >= this.width) this.dots[i].speedX = -this.dots[i].speed;
            else if (this.dots[i].x <= 0) this.dots[i].speedX = this.dots[i].speed;

            if (this.dots[i].y >= this.height) this.dots[i].speedY = -this.dots[i].speed;
            else if (this.dots[i].y <= 0) this.dots[i].speedY = this.dots[i].speed;

            // Draw dot
            this.ctx.beginPath();
            this.ctx.fillStyle = this.color;
            this.ctx.arc(this.dots[i].x, this.dots[i].y, this.dots[i].r, 0, Math.PI * 2);
            this.ctx.fill();

            // Draw line
            for (let j = 0; j < this.length; j ++) {

                if (Math.abs((this.dots[i].x - this.dots[j].x)) < (this.dots[i].r + this.dots[j].r) * 10
                && Math.abs((this.dots[i].y - this.dots[j].y)) < (this.dots[i].r + this.dots[j].r) * 10) {

                    this.ctx.beginPath();
                    this.ctx.strokeStyle = this.color;
                    this.ctx.moveTo(this.dots[i].x, this.dots[i].y);
                    this.ctx.lineTo(this.dots[j].x, this.dots[j].y);
                    this.ctx.stroke();
                    this.ctx.closePath();
                }
            }
        }
    }

    loop () {
        this.clear();
        this.update();

        requestAnimationFrame(() => this.loop());
    }
}