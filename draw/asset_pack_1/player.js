import { Entity } from './mob.js';
import { quest } from './quest.js';

export class Player extends Entity {
    constructor(game, windowWidth, windowHeight) {
        let stats = {
            name: "Nora",
            hp: 2000,
            mp: 1000,
            atkSpeed: 1,
            speed: 200,
            damage: 300
        };
        
        super(game, stats);
        
        this.isDie = false;
        this.isAtk = false;
        this.isReact = false;
        this.HPColor = 0x00aa00;
        this.windowWidth = windowWidth;
        this.windowHeight = windowHeight;
        this.currentQuest = null;
        
        this.createAnims();
        this.createHPBar();
        this.createBody();
        this.createControl();
        this.loadData();
    }
    
    createAnims() {
        this.game.anims.create({
            key: 'nora_idle',
            frames: this.game.anims.generateFrameNumbers('nora_idle', {start: 0, end: 1}),
            frameRate: 5,
            repeat: -1
        });
        
        this.game.anims.create({
            key: 'nora_walk',
            frames: this.game.anims.generateFrameNumbers('nora_walk', {start: 0, end: 7}),
            frameRate: 8,
            repeat: -1
        });
    }
    
    createBody() {
        this.body = this.game.add.sprite(0, 0, 'nora_idle').play('nora_idle');
        
        this.main.add(this.body);
        this.main.add(this.HPBar)
        this.main.x = 500;
        this.main.y = 200;
        this.main.setDepth(22);
        this.main.setSize(40, 130);
        this.game.physics.world.enable(this.main);
        this.game.cameras.main.startFollow(this.main);
        this.main.body.setCollideWorldBounds(true);
    }
    
    createControl() {
        // Touch control
        this.btnLeft = this.game.add.sprite(150, this.windowHeight - 150, 'arrow').setDepth(36).setScrollFactor(0).setFrame(1).setAlpha(.2).setInteractive();
        this.btnRight = this.game.add.sprite(400, this.windowHeight - 150, 'arrow').setDepth(36).setScrollFactor(0).setFlipX(true).setFrame(1).setAlpha(.2).setInteractive();
        this.btnUp = this.game.add.sprite(this.windowWidth - 150, this.windowHeight - 150, 'arrow').setDepth(36).setScrollFactor(0).setAngle(90).setFrame(1).setAlpha(.2).setInteractive();
        
        this.btnLeft.on('pointerover', () => {
            if (!this.isDie && !this.isReact) {
                this.btnLeft.setAlpha(1).setFrame(0);
                this.btnLeft.isDown = true;
                this.main.body.setVelocityX(-this.stats.speed);
                this.body.setFlipX(true);
                this.body.play('nora_walk');
            }
        });
        
        this.btnRight.on('pointerover', () => {
            if (!this.isDie && !this.isReact) {
                this.btnRight.setAlpha(1).setFrame(0);
                this.btnRight.isDown = true;
                this.main.body.setVelocityX(this.stats.speed);
                this.body.setFlipX(false);
                this.body.play('nora_walk');
            }
        });
        
        this.btnUp.on('pointerover', () => {
            if (!this.isDie && !this.isReact) {
                this.btnUp.setAlpha(1).setFrame(0);
                this.btnUp.isDown = true;
                if (this.main.body.blocked.down) {
                    this.main.body.setVelocityY(-700);
                }
            }
        });
        
        this.btnLeft.on('pointerout', () => {
            this.btnLeft.setAlpha(.2).setFrame(1);
            this.btnLeft.isDown = false;
            this.main.body.setVelocityX(0);
            this.body.play('nora_idle');
        });
        
        this.btnRight.on('pointerout', () => {
            this.btnRight.setAlpha(.2).setFrame(1);
            this.btnRight.isDown = false;
            this.main.body.setVelocityX(0);
            this.body.play('nora_idle');
        });
        
        this.btnUp.on('pointerout', () => {
            this.btnUp.setAlpha(.2).setFrame(1);
            this.btnUp.isDown = false;
        });

        // Keyboard control
        window.addEventListener('keydown', e => {
            if (e.key == "ArrowLeft" || e.key == "a") {
                this.main.body.setVelocityX(-this.stats.speed);
                this.body.setFlipX(true);
                this.body.play('nora_walk');
            }
            else if (e.key == "ArrowRight" || e.key == "d") {
                this.main.body.setVelocityX(this.stats.speed);
                this.body.setFlipX(false);
                this.body.play('nora_walk');
            }
            else if (e.key == "ArrowUp" || e.key == "w") {
                if (this.main.body.blocked.down) {
                    this.main.body.setVelocityY(-700);
                }
            }
        });

        window.addEventListener('keyup', e => {
            if (e.key == "ArrowRight" || e.key == "ArrowLeft" || e.key == "a" || e.key == "d") {
                this.main.body.setVelocityX(0);
                this.body.play('nora_idle');
            }
        });
    }
    
    saveQuest(quest, status) {
        localStorage.setItem(quest.key, status);
        quest.status = status;
    }
    
    saveData() {
        if (this.currentQuest != null) {
            localStorage.setItem('currentQuest', this.currentQuest.id);
        }
        else localStorage.setItem('currentQuest', "");
        
        let x = this.main.x;
        let y = this.main.y;
        localStorage.setItem('player_x', x);
        localStorage.setItem('player_y', y);
    }
    
    loadData() {
        this.main.x = parseInt(localStorage.getItem('player_x') || 300);
        this.main.y = parseInt(localStorage.getItem('player_y') || 200);
        
        let id = localStorage.getItem('currentQuest');
        if (id) {
            this.currentQuest = quest[parseInt(id)];
        }
    }
    
    checkQuest(npc) {
        let showHello = true;
        
        quest.forEach(q => {
            if (showHello && q.npc == npc.name) {
                if (q.status == 0) {
                    if (q.cond == null) {
                        showHello = false;
                        npc.text(q.start, () => {
                            this.currentQuest = q;
                            this.saveQuest(q, 1);
                            this.saveData();
                            this.addText("Đã nhận nhiệm vụ!", "#3B7600");
                        });
                    }
                    else if (localStorage.getItem(q.cond) == 3) {
                        showHello = false;
                        npc.text(q.start, () => {
                            this.currentQuest = q;
                            this.saveQuest(q, 1);
                            this.saveData();
                            this.addText("Đã nhận nhiệm vụ!", "#3B7600");
                        });
                    }
                }
                else if (q.status == 1) {
                    showHello = false;
                    npc.text(q.doing);
                    this.saveData();
                }
                else if (q.status == 2) {
                    showHello = false;
                    npc.text(q.end, () => {
                        this.currentQuest = null;
                        this.saveQuest(q, 3);
                        this.saveData();
                        
                        // Thêm phần thưởng vào đây
                    });
                }
            }
        });
        
        if (this.currentQuest) {
            if (this.currentQuest.type == 1) {
                if (this.currentQuest.quest == npc.name) {
                    showHello = false;
                    npc.text(this.currentQuest.finish, () => {
                        this.saveQuest(quest[this.currentQuest.id], 2);
                        this.currentQuest = null;
                        this.saveData();
                        this.addText("Nhiệm vụ hoàn thành!", "#3B7600");
                    });
                }
            }
        }
        
        if (showHello) npc.text(npc.hello);
    }
    
    update() {
        this._update();
        this.updateQuest0();
    }
    
    updateQuest0() {
        if (this.currentQuest) {
            if (this.currentQuest.type == 0) {
                if (this.currentQuest.quest == parseInt(this.main.x)) {
                    this.saveQuest(quest[this.currentQuest.id], 2);
                    this.currentQuest = null;
                    this.saveData();
                    this.addText("Nhiệm vụ hoàn thành!", "#3B7600");
                }
            }
        }
    }
}