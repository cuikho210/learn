export class Entity {
    constructor(game, stats) {
        this.game = game;
        
        this.stats = {
            name: "",
            hp: 0,
            mp: 0,
            atkSpeed: 0,
            speed: 0,
            damage: 0,
        };
        
        this.stats = stats;
        this.hp = this.stats.hp;
        this.mp = this.stats.mp;
        this.speed = 0;
        this.main = game.add.container();
        this.HPColor = 0xffffff;
        this.textArr = [];
    }
    
    createHPBar() {
        this.HPBar = this.game.add.graphics();
        this.drawHPBar();
        this.HPBar.y = -80;
    }
    
    drawHPBar() {
        this.HPBar.clear();
        
        let hp = (this.hp / this.stats.hp * 80);
        this.HPBar.fillStyle(this.HPColor);
        this.HPBar.fillRect(-40, -3, hp, 6);
        
        this.HPBar.lineStyle(1, 0x000000);
        this.HPBar.strokeRect(-40, -3, 80, 6);
    }
    
    addText(content, color) {
        let text = this.game.add.text(0, -100, content, {fontFamily: 'monospace', fontSize: '23px', color: color, align: "center"}).setOrigin(0.5);
        this.main.add(text);
        this.textArr.push(text);
    }
    
    _update() {
        this.textArr.forEach(t => {
            if (t.alpha > 0) {
                t.alpha -= 0.01;
                t.y -= 0.5;
            }
            else {
                this.main.remove(t);
                this.textArr.shift();
            }
        });
    }
}