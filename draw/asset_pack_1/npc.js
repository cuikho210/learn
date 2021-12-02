class NPC {
    constructor(game, name) {
        this.game = game;
        this.name = name;
        
        this.hello = null;
        this.main = null;
        this.body = null;
        this.nameBar = null;
        this.isReact = false;
    }
    
    createBody(key, x) {
        this.body = this.game.add.sprite(0, 0, key).play(key + "_idle").setInteractive();
        this.nameBar = this.game.add.text(0, -100, this.name, {color: "#000", fontSize: "20px", align: "center", fontFamily: 'monospace'}).setOrigin(.5);
        this.main = this.game.add.container(x, 435, [this.body, this.nameBar]);
        this.main.setDepth(20);
        this.main.setSize(40, 130);
    }
    
    createReact() {
        this.body.on('pointerdown', () => {
            if (!this.isReact) this.game.player.checkQuest(this);
        });
    }
    
    text(arr, onFinish) {
        this.game.player.isReact = true;
        this.isReact = true;
        
        let i = 0;
        
        let box = document.getElementById('textbox');
        let el_name = document.getElementById('name');
        let el_content = document.getElementById('content');
        
        box.style.display = "block";
        el_name.innerHTML = this.name;
        el_content.innerHTML = arr[0][0];
        
        box.onclick = () => {
            i += 1;
            
            if (arr[i]) {
                el_name.innerHTML = arr[i][1] ? this.name : "Nora";
                el_content.innerHTML = arr[i][0];
            }
            else {
                box.style.display = "none";
                i = 0;
                this.game.player.isReact = false;
                this.isReact = false;
                if (onFinish) onFinish();
            }
        };
    }
}

export class HoaHoa extends NPC {
    constructor(game) {
        super(game, "Hoa Hoa");
        
        this.hello = [
            ['Tránh ra, đừng sờ chị nữa, chị sướng lắm', true],
            ['Oke bro', false]
        ];
        
        this.createAnims();
        this.createBody('pink', 200);
        this.createReact();
    }
    
    createAnims() {
        this.game.anims.create({
            key: 'pink_idle',
            frames: this.game.anims.generateFrameNumbers('pink_idle', {start: 0, end: 1}),
            frameRate: 5,
            repeat: -1
        });
    }
}

export class QuaQua extends NPC {
    constructor(game) {
        super(game, "Quả Quả");
        
        this.hello = [
            ['Đừng sờ chỗ đó... A á ớ đừng mà... Huhu ai đó cứu tui với!', true],
            ['Oke bro', false]
        ];
        
        this.createAnims();
        this.createBody('pink', 3500);
        this.createReact();
        
        this.body.setFlipX(true);
    }
    
    createAnims() {
        this.game.anims.create({
            key: 'pink_idle',
            frames: this.game.anims.generateFrameNumbers('pink_idle', {start: 0, end: 1}),
            frameRate: 5,
            repeat: -1
        });
    }
}