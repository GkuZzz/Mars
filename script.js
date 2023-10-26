const burgerButton = document.querySelector('.header__burger');
const navigation = document.querySelector('.header__nav');



burgerButton.addEventListener('click', () => {
    navigation.classList.toggle('active')
    burgerButton.classList.toggle('active')
})