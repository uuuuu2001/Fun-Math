class main {
    constructor() {
        this.init();
        this.mode = 'Easy';
        this.soundStatus = false;
        this.game_music = new Audio("./audio/bg.wav");
        this.click_sound = new Audio("./audio/pop.mp3");
    }
    init() {        
        this.tag = document.createElement('div');
        this.tag.className = 'main';
        this.start = new start(this);
        this.options = new options(this);     
        document.body.appendChild(this.tag);
    }
    initGame(){
        this.game = new game(this);
    }
    initPauseBoard() {
        this.pause = new pause(this);
    }
    initGameOver() {
        this.gameOver = new gameOver(this);
    }
    playMusic() {
        this.game_music.play();
        this.game_music.loop = true;
    }
    clickSound() {
        if(this.soundStatus == true) {
            this.click_sound.play();
        }
    }
    reset(){
        this.game.reset();
    }
}