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