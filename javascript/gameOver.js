class gameOver {
    constructor (main) {
        this.scoreArray;
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
                <div class="game-mode">Mode: ${this.main.mode}</div>
                <div class="button-grp-1">
                    <a href = '' class="share-icon"></a>
                    <a href = '' class="video-icon"></a>
                    <div class="start-link-icon" id='start'></div>
                </div>
            </div>`            
        this.main.tag.appendChild(this.tag);
        document.getElementById('start').onclick = function() {
            location.reload();
        }  
    }
}