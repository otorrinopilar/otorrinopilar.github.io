const toggleButton = document.getElementsByClassName('togler__button')[0];
const headerMenu = document.getElementsByClassName('header__menu')[0];
const navLink = document.querySelectorAll('.nav__link');
const navContact = document.querySelectorAll('.nav__contact');


const sliders = document.querySelectorAll('.slide-in');


toggleButton.addEventListener('click', () => {
    headerMenu.classList.toggle('active'),
    toggleButton.classList.toggle('active')
});

navLink.forEach(n => n.addEventListener('click', () => {
    headerMenu.classList.remove('active'),
    toggleButton.classList.remove('active')
}));
navContact.forEach(n => n.addEventListener('click', () => {
    headerMenu.classList.remove('active'),
    toggleButton.classList.remove('active')
}));

const appearOptions = {
    threshold : 0,
    rootMargin : "0px 0px -150px 0px"
};

const appearOnScroll = new IntersectionObserver (function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);


sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});