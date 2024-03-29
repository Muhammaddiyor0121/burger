const navAnim = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        // Animate Items
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinksMove 0.5s ease forwards 
                ${index / 7 + 0.35}s`;
            }
        });
        //Burger animetion
        burger.classList.toggle("toggle");
    });
};
navAnim();