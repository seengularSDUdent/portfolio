const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');

    let isNavOpened = false;
    
    headerBtn.addEventListener('click', () => {
        isNavOpened = !isNavOpened;
        if (isNavOpened) {
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        }
        else {
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    })
    
    console.log(mobileLinks);
    mobileLinks.forEach((link) => {
        link.addEventListener('click', () => {
            isNavOpened = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        })
    })
}

export default mobileNav;