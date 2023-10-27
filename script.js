// BURGER

const burgerButton = document.querySelector('.header__burger');
const navigation = document.querySelector('.header__nav');
const video = document.querySelector('.video__text')


burgerButton.addEventListener('click', () => {
    navigation.classList.toggle('active')
    burgerButton.classList.toggle('active')

    burgerButton.classList.contains('active') ? video.style.display = 'none' : video.style.display = 'block'
})

// PARALAX

document.addEventListener('mousemove', (e) => {
    const body = document.querySelector('body');
    const xPos = (e.clientX / window.innerWidth) * 100;
    const yPos = (e.clientY / window.innerHeight) * 100;
    body.style.backgroundPosition = `${xPos}% ${yPos}%`;
});


// LOADING

document.addEventListener('DOMContentLoaded', () => {
    const deco = document.querySelector('.deco');
    const welcome = document.querySelector('.welcome-text');
    const title = document.querySelector('.video__title');
    const video = document.querySelector('.video')
    setTimeout(() => {
        deco.style.opacity = '1';
        welcome.style.opacity = '1'
    }, 800)

    setTimeout(() => {
        title.style.opacity = '1';
        // video.style.opacity = '1'
    }, 1200)

    setTimeout(() => {
        video.style.opacity = '1'
    }, 1000)
})



// POPUP

const popupButton = document.querySelector('.header__button');
const closePopupButton = document.querySelector('.exit__button')
const popup = document.querySelector('.popup');

popupButton.addEventListener('click', () => {
    popup.style.display = 'block'
})

closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none'
})