class game {
    constructor(main) {
        this.main = main;
        this.numberData = [];
        this.score = 0;
        this.run = true;
        this.dataArr = [];
        this.sound_correct = new Audio("./audio/correct.wav");
        this.sound_lose = new Audio("./audio/lose.wav");
        this.init();
    }
    init() {
        this.tag = document.createElement('div');
        this.tag.className = 'game';
        this.tag.innerHTML = 
            `<div class = "score">SCORE: ${ this.score }</div>
            `
        this.main.tag.appendChild(this.tag);
        this.initPauseTag();
        this.settingPause();
        this.initData();
        this.initBubble();          
        this.initAnswer(this.selects_data);
    }
    initPauseTag() {
        this.pause_tag = document.createElement('div');
        this.pause_tag.className ="pause-icon";
        this.tag.appendChild(this.pause_tag);
    }
    initBubble() {
        this.bubble = new bubble(this);
    }   
    initAnswer(data) {
        this.answer_box = document.createElement('div');
        this.answer_box.className = 'answer-box';
        data.forEach(text => {
            var item = new answer(this.answer_box, text, this)
        });
        this.tag.appendChild(this.answer_box);
    }
    numberRand() {
        do{
            this.number = Math.floor(Math.random() * (data.game_data.length - 1));
        }while(this.numberData.findIndex(number=> number == this.number) != -1);
        this.numberData.push(this.number);        
        
        return this.number;
    }
    
    initData() {

        var number = this.numberRand();
        this.data = data.game_data[number];
        this.bubble_data = this.data.question;
        this.selects_data = this.data.selects;
        this.result = this.data.result;
        this.question = this.data.question;
    }
    initDataArr() {
        this.dataArr.push(this.data);
    }
    updateWhenCorrect() {
        this.initData();
        this.initBubble();
        this.initAnswer(this.selects_data);
        this.initPauseTag();
        this.settingPause();
        this.bubble.status = true;
    }
    playCorrectSound() {
        if(this.main.soundStatus == true) {
            this.sound_correct.play();
        }
    }
    playLoseSound() {
        if(this.main.soundStatus == true) {
            this.sound_lose.play();
        }
    }
    check(number) {
        if(number == this.result) {
            this.playCorrectSound();
            this.score++;
            this.tag.innerHTML = 
            `<div class = "score">SCORE: ${ this.score }</div>`;
            this.updateWhenCorrect();
        }
        else {
            this.playLoseSound();
            this.run = false;
            this.main.initGameOver() 
        }
    }
    initScore() {
        this.score_tag = document.createElement('div');
        this.score_tag.className = "score";
        this.score_tag.innerHTML = `<div> SCORE  : ${ this.score } </span>`
        this.tag.appendChild(this.score_tag);
    }
    initPause() {
        this.pause = new pause(this);
    }
    settingPause(){
        this.pause_tag.addEventListener('click', ()=>{
            this.main.clickSound();
            this.initPause();
            this.run = false;
        })
    }
    reset() {
        this.run = true;
        this.score = 0;
        this.tag.innerHTML = 
            `<div class = "score">SCORE: ${ this.score }</div>
            `
        this.main.tag.appendChild(this.tag);
        this.initPauseTag();
        this.settingPause();
        this.initData();
        this.initBubble();          
        this.initAnswer(this.selects_data);
    }

    
}
