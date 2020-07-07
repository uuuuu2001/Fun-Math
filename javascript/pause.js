class pause {
    constructor(game) {
        this.game = game;
        this.button = null;
        this.init();

    }
    init() {
        this.tag = document.createElement('div');
        this.tag.className = 'pause-board';
        // this.tag.innerHTML = 
        //     `<div class="button-grp">
        //                 <div class = 'home-icon'></div>
        //                 <div class = 'resume-icon'></div>
        //                 <div class = 'reverse-icon'></div>
        //         </div>
        //     </div>`
        this.initButton();
        this.game.tag.appendChild(this.tag);
        

    }
    initButton() {
        this.button = document.createElement('div');
        this.button.className = 'button-grp'
        this.button.innerHTML = `
        <div class = 'home-icon'></div>
        <div class = 'resume-icon'></div>
        <div class = 'reverse-icon'></div>`
        this.tag.appendChild(this.button);
        this.button.addEventListener('click', ()=>{
            this.game.reset();
            this.game.run = true;
            this.game.initPause() = false;
        })
    }
}