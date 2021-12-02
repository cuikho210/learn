const WIDTH = 720 * window.innerWidth / window.innerHeight;
const HEIGHT = 720;

import { HoaHoa, QuaQua } from './npc.js';
import { Player } from './player.js';

window.onload = () => {
    let canvas = document.getElementById('game');
    let ctxConfig = {
        alpha: false,
        depth: false,
        antialias: true,
        premultipliedAlpha: true,
        stencil: true,
        preserveDrawingBuffer: false,
        failIfMajorPerformanceCaveat: false,
        powerPreference: 'default'
    };
    let ctx = canvas.getContext('webgl', ctxConfig);
    
    let game = new Phaser.Game({
        type: Phaser.WEBGL,
        width: WIDTH,
        height: HEIGHT,
        canvas: canvas,
        context: ctx,

        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
        
        physics: {
            default: "arcade",
            arcade: {
                gravity: {y: 2000},
                debug: false
            }
        },

        // fps: {
        //     target: 60,
        //     forceSetTimeOut: true
        // },
        
        scene: [Preload, Map0],
    });
}

class Preload extends Phaser.Scene {
    constructor() {
        super('preload');
    }
    
    preload() {
        this.add.text(30, 30, "Loading...", {color: "#ffffff", fontSize: "18px"});
        
        // Scene 0
        this.load.image('map0_0', 'assets/scene/0/0.png');
        this.load.image('map0_1', 'assets/scene/0/1.png');
        this.load.image('map0_2', 'assets/scene/0/2.png');
        this.load.image('map0_3', 'assets/scene/0/3.png');
        this.load.image('map0_4', 'assets/scene/0/4.png');
        this.load.image('map0_5', 'assets/scene/0/5.png');
        
        // Character
        this.load.spritesheet('nora_idle', 'assets/char/nora/idle.png', {frameWidth: 200, frameHeight: 200});
        this.load.spritesheet('nora_walk', 'assets/char/nora/walk.png', {frameWidth: 200, frameHeight: 200});
        this.load.spritesheet('pink_idle', 'assets/char/pink/idle.png', {frameWidth: 200, frameHeight: 200});
        
        // UI
        this.load.spritesheet('arrow', 'assets/ui/arrow.png', {frameWidth: 200, frameHeight: 200});
    }
    
    create() {
        this.scene.start('map0');
    }
}

class Map0 extends Phaser.Scene {
    constructor() {
        super('map0');
    }
    
    create() {
        this.input.addPointer(1);
        
        this.createScene();
        this.createPlayer();
        this.createNPC();
    }
    
    createScene() {
        this.cameras.main.fadeIn(3000, 0, 0, 0);
        this.physics.world.setBounds(0, 0, 3840, HEIGHT - 220);
        this.cameras.main.setBounds(0, 0, 3840, HEIGHT);
        
        this.ground0 = this.add.tileSprite(0, 0, WIDTH, HEIGHT, "map0_0").setOrigin(0).setScrollFactor(0).setDepth(0);
        this.ground1 = this.add.tileSprite(0, 0, WIDTH, HEIGHT, "map0_1").setOrigin(0).setScrollFactor(0).setDepth(1);
        this.ground2 = this.add.tileSprite(0, 0, WIDTH, HEIGHT, "map0_2").setOrigin(0).setScrollFactor(0).setDepth(10);
        this.ground3 = this.add.tileSprite(0, 0, WIDTH, HEIGHT, "map0_3").setOrigin(0).setScrollFactor(0).setDepth(11);
        this.ground4 = this.add.tileSprite(0, 451, WIDTH, HEIGHT, "map0_4").setOrigin(0).setScrollFactor(0).setDepth(30);
        this.ground5 = this.add.tileSprite(0, 0, WIDTH, HEIGHT, "map0_5").setOrigin(0).setScrollFactor(0).setDepth(31);
    }
    
    createPlayer() {
        this.player = new Player(this, WIDTH, HEIGHT);
    }
    
    createNPC() {
        this.hoa = new HoaHoa(this);
        this.qua = new QuaQua(this);
    }
    
    update() {
        this.updateScene();
        this.player.update();
    }
    
    updateScene() {
        this.ground0.tilePositionX = this.cameras.main.worldView.x * 0.05;
        this.ground1.tilePositionX = this.cameras.main.worldView.x * 0.15;
        this.ground2.tilePositionX = this.cameras.main.worldView.x * 0.3;
        this.ground3.tilePositionX = this.cameras.main.worldView.x * 1;
        this.ground4.tilePositionX = this.cameras.main.worldView.x * 1;
        this.ground5.tilePositionX = this.cameras.main.worldView.x * 2;
    }
}