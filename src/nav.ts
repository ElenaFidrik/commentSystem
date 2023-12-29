class navigation {
    menu: NodeListOf<Element>;
    submenu: NodeListOf<Element>;
    submenuItem: NodeListOf<Element>;
    arrow: Element | null;
    text?: Element | null;
    select: Element | null;
    currentText: any;
    innerText?: Element | null;
    parentElement?: Element | null;
    closest: any;
    classList: any;

    constructor() {
        this.menu  = document.querySelectorAll('.menu');
        this.submenu  = document.querySelectorAll('.submenu');
        this.submenuItem = document.querySelectorAll('.submenu_item');
        this.arrow = document.querySelector('.arrow');
        this.select = document.querySelector('.nav_link_filter');
        this.text = this.text;
        this.innerText = this.innerText;
        this.currentText = this.currentText;
    }

    public selectitems() {         
        this.menu.forEach(item => {
            item.addEventListener('click', this.selectToggle); 
        });

        this.submenuItem.forEach(item => { 
            item.addEventListener('click', this.selectChoose);
        }); 
     }

    public selectToggle() {     
        this.parentElement?.classList.toggle('submenu_active'); 
    };

    public selectChoose() {
        this.text = this.innerText; 
        this.select = this.closest('.menu'); 
        this.currentText = this.select?.querySelector('.nav_link_filter'); 
        this.currentText.innerText = this.text; 
        this.select?.classList.remove('submenu_active');
        nav.removeCheckMarkClass();
        this.classList?.add('check_mark'); 
        
    };

    public removeCheckMarkClass() {
        this.submenuItem.forEach(item => {
            item.classList.remove('check_mark'); 
        });
    };

    public reverseArrow() {
        this.arrow?.addEventListener('click', function(this: any): void {
            this.classList.toggle('reverse_arrow'); 

        })
    } 
}

let nav = new navigation();
nav.selectitems();
nav.reverseArrow();