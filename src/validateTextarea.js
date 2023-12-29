var inputComment = /** @class */ (function () {
    function inputComment() {
        this.textlength = 0;
        this.value = '';
        this.count = document.querySelector('.text_limit');
        this.error = document.querySelector('.error');
        this.textarea = document.querySelector('#inputComment');
        this.btn = document.querySelector('.btnSend');
        this.limit = 1000;
    }
    ;
    inputComment.prototype.validateTextarea = function () {
        var _this = this;
        this.textarea.addEventListener('input', function () {
            _this.textlength = _this.textarea.value.length;
            _this.count.innerText = "".concat(_this.textlength, "/").concat(_this.limit);
            if (_this.textlength > _this.limit) {
                _this.count.innerHTML = "".concat(_this.textlength, "/").concat(_this.limit);
                _this.count.classList.add('count_error');
                _this.error.innerText = "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0434\u043B\u0438\u043D\u043D\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435";
                _this.btn.classList.remove('btn_active');
            }
            else if (_this.textlength <= 0) {
                _this.count.innerHTML = "\u041C\u0430\u043A\u0441. ".concat(_this.limit, " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
                _this.btn.classList.remove('btn_active');
            }
            else if (_this.textlength <= _this.limit) {
                _this.error.innerText = '';
                _this.btn.classList.add('btn_active');
            }
            ;
        });
    };
    return inputComment;
}());
var input = new inputComment();
input.validateTextarea();
