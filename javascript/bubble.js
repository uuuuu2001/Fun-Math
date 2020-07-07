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

        var y = this.tag.offsetTop;
        
        setInterval(() => {
            switch (this.game.run) {
                case true:
                    if (y < 0 && this.status ) {
                        this.game.main.initGameOver();
                        this.status = false;
                    }
                    if (y >= 0){
                        y -= 2;
                        this.tag.style.top = y + 'px';
                    } 
                    break;
            
                case false:

                    break;
            }
                             
        }, 50);
    }
    checkTop() {
        return this.tag.offsetTop < -100;
    }
}