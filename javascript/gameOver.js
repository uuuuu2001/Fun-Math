class gameOver {
    constructor (main) {
        this.main = main;
        this.init();
    }
    init() {
        this.tag = document.createElement('div');
        this.tag.className = 'gob-bg';
        this.tag.innerHTML =         
            `<div class = 'game-over-board'>
                <div class = 'score'> ${ this.main.game.score }</div>
                <div class = 'best-score-1'>Best: ${ this.main.game.score } </div>
                <div class="game-mode">Mode:</div>
                <div class="button-grp-1">
                    <a href = '' class="share-icon"></a>
                    <a href = '' class="video-icon"></a>
                    <a href = '' class="start-link-icon"></a>
                </div>
            </div>`
            
        this.main.tag.appendChild(this.tag);
    }
}