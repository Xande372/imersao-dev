// navbar da cor preta depois que descer a página.
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        nav.classList.add('nav__black');
    } else {
        nav.classList.remove('nav__black');
    }
});

