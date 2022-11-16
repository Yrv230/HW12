class MediaMenu {
    constructor() {
        this.nav = document.querySelector('.header__nav');
        this.menu = document.querySelector('.header__nav-menu');
        this.openBtn = document.querySelector('.header__nav-open');
        this.closeBtn = document.querySelector('.header__nav-close');

        this.openBtn.addEventListener('click', () => {
            this.openMenu()
        });

        this.closeBtn.addEventListener('click', () => {
            this.closeMenu()
        });
    }

    openMenu() {
        this.openBtn.classList.remove('active');
        this.closeBtn.classList.add('active');
        this.menu.classList.add('active');
        this.nav.style.height = '100vh';
    }

    closeMenu() {
        this.closeBtn.classList.remove('active');
        this.openBtn.classList.add('active');
        this.menu.classList.remove('active');
        this.nav.style.height = '';
    }
}

let mediaMenu = new MediaMenu();