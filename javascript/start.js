class start {
    constructor(main) {
        this.main = main;
        this.init();
        
    }
    init() {
        this.tag = document.createElement('div');
        this.tag.className = 'start';
        this.tag.innerHTML = 
            `<div class="banner"></div>
            <div class="best-score">Best:  </div>
            <div class="buttons">
                <div class="grp">
                    <a href="" class = 'star-icon'></a>
                    <a href="" class = 'crown-icon'></a>
                    <a href="" class = 'medal-icon'></a>
                </div>
                <div class="grp">
                    <div class = 'play-icon'></div>
                </div>
                <div class ="grp">
                    <div class = 'setting-icon'></div>
                    <div class = 'sound-icon'></div>
                    <div class = 'no-ads-icon'></div>
                </div>
            </div>`
        this.main.tag.appendChild(this.tag);
    }
  
    
    
}