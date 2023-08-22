const addPreload = (elem) => {
    elem.classList.add('preload')
}
const removePreload = (elem) => {
    elem.classList.remove('preload')
}
const startSlider = () => {


}

export const initSlider = () => {
    const sliderContainer = document.querySelector('.slider__container');
    const slider = document.querySelector('.slider');

    addPreload(slider);
    sliderContainer.style.display = 'none';

    window.addEventListener('load', () => {
        removePreload(slider);
        sliderContainer.style.display = '';
    })
}