class answer extends CommentActive {
    innerHTML?: HTMLElement;
    constructor() {
        super()
    }

    public createAnswer() {
        document.querySelectorAll('.btn-answer').forEach(function(item: any): void{
            item.addEventListener('click', function(event: any): void{
                comm.arrowAnswer = event.currentTarget.closest('.btn-answer');
                comm.indexArrow = comm.arrowAnswer.getAttribute('data-index-arrow');
                comm.drawAnswer = document.querySelector(`.answer-field-${comm.indexArrow}`); 
                comm.drawAnswer.innerHTML =
                    `<form class="area-answer">
                        <input class="field-answer" type="text" size="40" id="idAnswer" placeholder="Введите ответ...">
                        <button class="submit-answer" type="submit" id="btnAnswer">Ответить</button>
                    </form>`;
    
                    answ.submitAnswer(comm.indexArrow);
                    comm.saveComments();
            });
        });
    };

    public submitAnswer() {                                                  
        document.querySelectorAll('.submit-answer').forEach(function(item){  
            item.addEventListener('click', function(subm){
                subm.preventDefault();
                let answerBody = document.getElementById('idAnswer');
    
                let comAnswer = {
                    bodyAnswer: comm.answerBody.value,
                    timeAnswer: Math.floor(Date.now() / 1000),
                    userSendAnswer: 'Максим Авдеенко',
                    userAnswer: 'Джунбокс3000',
                    photoAnswer: './images/Jun.png',
                    likeAnswer: false,
                    favoriteOffAnswer: 'В избранное',
                    ratingScoreAnswer: 0,
                };

                comm.comments[comm.indexArrow].answer.push(comAnswer);
                comm.saveComments();
            });
        });
    };

    public paintAnswer() {                        
        this.resultComment!.innerHTML = '';
    
        this.comments.forEach(function(item: any, index): void {
            comm.out = '';
            comm.out += `<div class="user_img"></div>`;
            comm.out += `<div class="user_sent">${item.userSend}</div>`;
            comm.out += `<div class="date">${comm.timeConverter(item.time)}</div>`;
            comm.out += `<p class="text_sent">${item.body}</p>`;
            comm.out += `<div class="toolbar_sent">
                       <button class="button-bordernone btn-answer" data-index-arrow="${index}">
                           <svg class="toolbar-sent_svg-answer" width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M8.004 2.98l-6.99 4.995 6.99 4.977V9.97c1.541-.097 2.921-.413 7.01 3.011-1.34-4.062-3.158-6.526-7.01-7.001v-3z" fill="#918d8d"></path>
                           </svg>
                       </button>
                       <h3 class="toolbar-sent_text">Ответить</h3>
                       <div class="inFavorite ${item.like ? 'toggleHeart' : ''}" data-index="${index}">
                            ${comm.drawHeart(item.like)}
                       </div>
                       <div class="rating-minus">
                           <button class="button-bordernone rating btn__rating-minus" data-index-change="${index}">
                               <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <circle opacity="0.1" cx="10" cy="13" r="10" fill="black"/>
                               <path d="M13.0696 11.6399V13.2955H7.26562V11.6399H13.0696Z" fill="#FF0000"/>
                           </svg>
                           </button>
                       </div>
                       <h3 class="toolbar-sent_text-rating rating-text-${index}">${item.ratingScore}</h3>
                       <div class="rating-plus">
                       <button class="button-bordernone rating btn__rating-plus" data-index-change="${index}">
                           <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <circle opacity="0.1" cx="10" cy="13" r="10" fill="black"/>
                           <path d="M9.13281 17.169V8.52699H10.8523V17.169H9.13281ZM5.67472 13.7045V11.9851H14.3168V13.7045H5.67472Z" fill="#8AC540"/>
                           </svg>
                       </button>
                   </div>
                    </div>
                    <div class="block-result-answer answer-field-${index}"></div>
                   </div>`; 
           
            comm.resultComment!.innerHTML += comm.out;
    
        });
    };
}

let answ = new answer();
answ.createAnswer();
answ.submitAnswer();