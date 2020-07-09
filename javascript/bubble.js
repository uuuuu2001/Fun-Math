class bubble {
    constructor(game) {
        this.game = game;
        this.question = this.game.question;
        this.init();
        this.status = true;
    }
    init() {
        this.tag = document.createElement('div');
        this.tag.className = 'bubble';
        this.tag.innerHTML = `<div class = 'question'> ${this.question}</div>`
        this.game.tag.appendChild(this.tag);
        this.swim();
    }
    swim() {        
        setInterval(() => {
            var y = this.tag.offsetTop;
            switch (this.game.run) {
                case true:
                    if (y == 20 && this.status ) {
                        console.log(y);
                        this.status = false;
                        this.game.playLoseSound();
                        this.game.main.initGameOver();                        
                    }
                    if (y >= 20){
                        y -= 2;
                        this.tag.style.top = y + 'px';
                    } 
                    break;            
                case false:
                    break;
            }                             
        }, 30);
    }
}