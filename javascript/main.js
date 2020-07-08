class main {
    constructor() {
        this.init();
    }
    init() {
        this.tag = document.createElement('div');
        this.tag.className = 'main';
        this.start = new start(this);
        this.options = new options(this);
        
        
        document.body.appendChild(this.tag);
    }
    // initPause(){
    //     this.game.initPause();
    // }
    initGame(){
        this.game = new game(this);
    }
    initGameOver() {
        this.gameOver = new gameOver(this);
    }
}

