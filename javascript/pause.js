class pause {
    constructor(game) {
        this.game = game;
        this.display = true;
        this.init();
    }
    init() {
        this.tag = document.createElement('div');
        this.tag.className = 'pause-board-bg';
        this.initPauseBoard();
        this.game.tag.appendChild(this.tag);
    }
    
    initPauseBoard() {
        this.pause_board = document.createElement('div');
        this.pause_board.className = 'pause-board';        
        this.initHomeIcon();
        this.initResumeIcon();
        this.initReverseIcon();
        this.tag.appendChild(this.pause_board);

    }
    initHomeIcon() {
        this.home_icon = document.createElement('div');
        this.home_icon.className = 'button-grp home-icon';
        this.pause_board.appendChild(this.home_icon);
        this.home_icon.addEventListener('click', ()=>{
            this.tag.remove(this.tag);
            location.reload();
        })
    }
    initResumeIcon() {
        this.resume_icon = document.createElement('div');
        this.resume_icon.className = 'button-grp resume-icon';
        this.pause_board.appendChild(this.resume_icon);
        this.resume_icon.addEventListener('click', ()=>{
            this.game.main.clickSound();
            this.game.run = true;
            this.tag.remove(this.tag);
        })
    }
    initReverseIcon() {
        this.reverse_icon = document.createElement('div');
        this.reverse_icon.className = 'button-grp reverse-icon';
        this.pause_board.appendChild(this.reverse_icon);
        this.reverse_icon.addEventListener('click', ()=>{
            this.game.main.clickSound();
            this.game.main.reset();
        })
    }
}
