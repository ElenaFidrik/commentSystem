var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var answer = /** @class */ (function (_super) {
    __extends(answer, _super);
    function answer() {
        return _super.call(this) || this;
    }
    answer.prototype.createAnswer = function () {
        document.querySelectorAll('.btn-answer').forEach(function (item) {
            item.addEventListener('click', function (event) {
                comm.arrowAnswer = event.currentTarget.closest('.btn-answer');
                comm.indexArrow = comm.arrowAnswer.getAttribute('data-index-arrow');
                comm.drawAnswer = document.querySelector(".answer-field-".concat(comm.indexArrow));
                comm.drawAnswer.innerHTML =
                    "<form class=\"area-answer\">\n                        <input class=\"field-answer\" type=\"text\" size=\"40\" id=\"idAnswer\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0442\u0432\u0435\u0442...\">\n                        <button class=\"submit-answer\" type=\"submit\" id=\"btnAnswer\">\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C</button>\n                    </form>";
                answ.submitAnswer(comm.indexArrow);
                comm.saveComments();
            });
        });
    };
    ;
    answer.prototype.submitAnswer = function () {
        document.querySelectorAll('.submit-answer').forEach(function (item) {
            item.addEventListener('click', function (subm) {
                subm.preventDefault();
                var answerBody = document.getElementById('idAnswer');
                var comAnswer = {
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
    ;
    answer.prototype.paintAnswer = function () {
        this.resultComment.innerHTML = '';
        this.comments.forEach(function (item, index) {
            comm.out = '';
            comm.out += "<div class=\"user_img\"></div>";
            comm.out += "<div class=\"user_sent\">".concat(item.userSend, "</div>");
            comm.out += "<div class=\"date\">".concat(comm.timeConverter(item.time), "</div>");
            comm.out += "<p class=\"text_sent\">".concat(item.body, "</p>");
            comm.out += "<div class=\"toolbar_sent\">\n                       <button class=\"button-bordernone btn-answer\" data-index-arrow=\"".concat(index, "\">\n                           <svg class=\"toolbar-sent_svg-answer\" width=\"24\" height=\"24\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\">\n                               <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.004 2.98l-6.99 4.995 6.99 4.977V9.97c1.541-.097 2.921-.413 7.01 3.011-1.34-4.062-3.158-6.526-7.01-7.001v-3z\" fill=\"#918d8d\"></path>\n                           </svg>\n                       </button>\n                       <h3 class=\"toolbar-sent_text\">\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C</h3>\n                       <div class=\"inFavorite ").concat(item.like ? 'toggleHeart' : '', "\" data-index=\"").concat(index, "\">\n                            ").concat(comm.drawHeart(item.like), "\n                       </div>\n                       <div class=\"rating-minus\">\n                           <button class=\"button-bordernone rating btn__rating-minus\" data-index-change=\"").concat(index, "\">\n                               <svg width=\"20\" height=\"23\" viewBox=\"0 0 20 23\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                               <circle opacity=\"0.1\" cx=\"10\" cy=\"13\" r=\"10\" fill=\"black\"/>\n                               <path d=\"M13.0696 11.6399V13.2955H7.26562V11.6399H13.0696Z\" fill=\"#FF0000\"/>\n                           </svg>\n                           </button>\n                       </div>\n                       <h3 class=\"toolbar-sent_text-rating rating-text-").concat(index, "\">").concat(item.ratingScore, "</h3>\n                       <div class=\"rating-plus\">\n                       <button class=\"button-bordernone rating btn__rating-plus\" data-index-change=\"").concat(index, "\">\n                           <svg width=\"20\" height=\"23\" viewBox=\"0 0 20 23\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                           <circle opacity=\"0.1\" cx=\"10\" cy=\"13\" r=\"10\" fill=\"black\"/>\n                           <path d=\"M9.13281 17.169V8.52699H10.8523V17.169H9.13281ZM5.67472 13.7045V11.9851H14.3168V13.7045H5.67472Z\" fill=\"#8AC540\"/>\n                           </svg>\n                       </button>\n                   </div>\n                    </div>\n                    <div class=\"block-result-answer answer-field-").concat(index, "\"></div>\n                   </div>");
            comm.resultComment.innerHTML += comm.out;
        });
    };
    ;
    return answer;
}(CommentActive));
var answ = new answer();
answ.createAnswer();
answ.submitAnswer();
