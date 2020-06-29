class pause {
    constructor(game) {
        this.game = game;
        this.init();

    }
    init() {
        this.tag = document.createElement('div');
        this.tag.className = 'pause-board';
        this.tag.innerHTML = 
            `<div class="button-grp">
                        <div class = 'home-icon'></div>
                        <div class = 'resume-icon'></div>
                        <div class = 'reverse-icon'></div>
                </div>
            </div>`
        this.home_tag
        this.game.tag.appendChild(this.tag);
    }
}