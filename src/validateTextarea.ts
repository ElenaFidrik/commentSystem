class inputComment {
    count: any;
    error?: any;
    textarea: any;
    btn: any;
    limit: number;
    textlength: number = 0;
    innerText?: Element | null;
    value: string = '';

    constructor() {      
        this.count = document.querySelector('.text_limit');
        this.error = document.querySelector('.error');
        this.textarea = document.querySelector('#inputComment');
        this.btn = document.querySelector('.btnSend');
        this.limit = 1000;
    };

    public validateTextarea() {                              
        this.textarea.addEventListener('input', () => {
        this.textlength = this.textarea.value.length;
        this.count.innerText = `${this.textlength}/${this.limit}`;

        if(this.textlength > this.limit) {
            this.count.innerHTML = `${this.textlength}/${this.limit}`;
            this.count.classList.add('count_error');
            this.error.innerText = `Слишком длинное сообщение`
            this.btn.classList.remove('btn_active');

        } else if(this.textlength <= 0) {
            this.count.innerHTML = `Макс. ${this.limit} символов`;  
            this.btn.classList.remove('btn_active');

        } else if (this.textlength <= this.limit) {
            this.error.innerText ='';
            this.btn.classList.add('btn_active');
        };
        });
    }
}
let input = new inputComment();
input.validateTextarea();