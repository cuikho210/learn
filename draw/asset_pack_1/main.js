const WIDTH = 720 * window.innerWidth / window.innerHeight;
const HEIGHT = 720;

window.onload = () => {
    let game = new Phaser.Game({
        type: Phaser.AUTO,
        width: WIDTH,
        height: HEIGHT,

        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH
        },

        // fps: {
        //     target: 60,
        //     forceSetTimeOut: true
        // },
        
        scene: [Preload, Main]
    });
}

class Preload extends Phaser.Scene {
    constructor() {
        super('preload');
    }
    
    preload() {
        this.add.text(30, 30, "Loading...", {color: "#ffffff"});
        
        this.load.spritesheet('walk', 'walk.png', {frameWidth: 200, frameHeight: 200});
        
        this.load.image('1', '1.png');
        this.load.image('2', '2.png');
        this.load.image('3', '3.png');
        this.load.image('4', '4.png');
        this.load.image('5', '5.png');
        this.load.image('6', '6.png');
        
        this.load.audio('theme', 'theme.mp3');
    }
    
    create() {
        this.scene.start('main');
    }
}

class Main extends Phaser.Scene {
    constructor() {
        super('main');
    }
    
    create() {
        this.sound.play('theme');
        
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('walk', {start: 0, end: 7}),
            frameRate: 7,
            repeat: -1
        });
        
        this.player = this.add.sprite(WIDTH / 2, 420, 'walk').setDepth(5).play('walk');
        
        this.bg1 = this.add.tileSprite(0, 0, WIDTH, HEIGHT, '1').setOrigin(0).setScrollFactor(0).setDepth(1);
        this.bg2 = this.add.tileSprite(0, 0, WIDTH, HEIGHT, '2').setOrigin(0).setScrollFactor(0).setDepth(2);
        this.mg = this.add.tileSprite(0, 0, WIDTH, HEIGHT, '3').setOrigin(0).setScrollFactor(0).setDepth(3);
        this.pf1 = this.add.tileSprite(0, 0, WIDTH, HEIGHT, '4').setOrigin(0).setScrollFactor(0).setDepth(4);
        this.pf2 = this.add.tileSprite(0, 0, WIDTH, HEIGHT, '5').setOrigin(0).setScrollFactor(0).setDepth(6);
        this.fg = this.add.tileSprite(0, 0, WIDTH, HEIGHT, '6').setOrigin(0).setScrollFactor(0).setDepth(7);
        
        
    }
    
    update() {
        this.bg1.tilePositionX += .05;
        this.bg2.tilePositionX += .15;
        this.mg.tilePositionX += .3;
        this.pf1.tilePositionX += 1;
        this.pf2.tilePositionX += 1;
        this.fg.tilePositionX += 2;
    }
}