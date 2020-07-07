class options {
    constructor(main) {
        this.main = main;
        this.init();
    }
    init() {
        this.tag = document.createElement('div');
        this.tag.className = 'options';
        this.tag.innerHTML = 
            `<div class="button-grp-0">
                <div class="easy-icon"></div>
                <div class="standard-icon"></div>
                <div class="geek-icon"></div>
                <div class="time-table-icon"></div>
            </div>`      
        this.main.tag.appendChild(this.tag);
    }
}