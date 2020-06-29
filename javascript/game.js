class game {
    constructor(main) {
        this.main = main;
        this.score = 0;
        this.run = true;
        this.init();

    }
    init() {
        this.tag = document.createElement('div');
        this.tag.className = 'game';
        this.tag.innerHTML = 
            `<div class = "score">SCORE: ${ this.score }</div>
            `
        this.pause_tag =  document.createElement('div');
        this.pause_tag.className ="pause-icon";
        this.tag.appendChild(this.pause_tag);
        this.main.tag.appendChild(this.tag);
        this.settingPause();
        this.initData();
        this.initBubble();
        
        this.initAnswer(this.selects_data);
    }
    initBubble() {
        this.bubble = new bubble(this);
    }
    initPause() {
        this.pause = new pause(this);

    }
    
    initAnswer(data) {
        this.answer_box = document.createElement('div');
        this.answer_box.className = 'answer-box';
        data.forEach(text => {
            var item = new answer(this.answer_box, text, this)
        });
        this.tag.appendChild(this.answer_box);
    }
    initData() {
        this.number = Math.floor(Math.random() * (data.game_data.length - 1));
        this.data = data.game_data[this.number];
        this.bubble_data = this.data.question;
        this.selects_data = this.data.selects;
        this.result = this.data.result;
        this.question = this.data.question;
    }
    updateStatusWhen() {
        this.game = new game(this);
        this.init();
    }
    check(number) {
        if(number == this.result) {
            this.score++;
            this.tag.innerHTML = 
            `<div class = "score">SCORE: ${ this.score }</div>`;
            updateStatusWhen();
        }
        else (
            this.main.initGameOver(),
            this.run = false
        )
    }
    initScore() {
        this.score_tag = document.createElement('div');
        this.score_tag.className = "score";
        this.score_tag.innerHTML = `<div> SCORE  : ${ this.score } </span>`
        this.tag.appendChild(this.score_tag);
    }
    settingPause(){
        this.pause_tag.addEventListener('click', ()=>{
            this.initPause();
            this.run = false;
        })
    }
    backToStart() {
        
    }

    
}
