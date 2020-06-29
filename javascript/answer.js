class answer {
    constructor(tag, text, game) {
        this.text = text;
        this.game = game;
        this.parent = tag;
        this.init();
    }
    init() {
        this.tag = document.createElement('div');
        this.tag.className = 'answer-item';
        this.tag.innerHTML = this.text;
        this.parent.appendChild(this.tag);
        this.setMouseClick();
    }
    setMouseClick() {
        this.tag.addEventListener('click', (event) => {
            this.tag.classList.add('active');
            this.game.check(this.text);
        })
    }
}