function smoothScroll(toSection) {
    document.getElementById(toSection).scrollIntoView({
        behavior: 'smooth'
    });
}