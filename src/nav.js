var navigation = /** @class */ (function () {
    function navigation() {
        this.menu = document.querySelectorAll('.menu');
        this.submenu = document.querySelectorAll('.submenu');
        this.submenuItem = document.querySelectorAll('.submenu_item');
        this.arrow = document.querySelector('.arrow');
        this.select = document.querySelector('.nav_link_filter');
        this.text = this.text;
        this.innerText = this.innerText;
        this.currentText = this.currentText;
    }
    navigation.prototype.selectitems = function () {
        var _this = this;
        this.menu.forEach(function (item) {
            item.addEventListener('click', _this.selectToggle);
        });
        this.submenuItem.forEach(function (item) {
            item.addEventListener('click', _this.selectChoose);
        });
    };
    navigation.prototype.selectToggle = function () {
        var _a;
        (_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.classList.toggle('submenu_active');
    };
    ;
    navigation.prototype.selectChoose = function () {
        var _a, _b, _c;
        this.text = this.innerText;
        this.select = this.closest('.menu');
        this.currentText = (_a = this.select) === null || _a === void 0 ? void 0 : _a.querySelector('.nav_link_filter');
        this.currentText.innerText = this.text;
        (_b = this.select) === null || _b === void 0 ? void 0 : _b.classList.remove('submenu_active');
        nav.removeCheckMarkClass();
        (_c = this.classList) === null || _c === void 0 ? void 0 : _c.add('check_mark');
    };
    ;
    navigation.prototype.removeCheckMarkClass = function () {
        this.submenuItem.forEach(function (item) {
            item.classList.remove('check_mark');
        });
    };
    ;
    navigation.prototype.reverseArrow = function () {
        var _a;
        (_a = this.arrow) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            this.classList.toggle('reverse_arrow');
        });
    };
    return navigation;
}());
var nav = new navigation();
nav.selectitems();
nav.reverseArrow();
