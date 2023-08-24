export const preLoadSlider = () => {

    const addPreload = (elem) => {
        elem.classList.add('preload')
    }
    const removePreload = (elem) => {
        elem.classList.remove('preload')
    }

    const slider = document.querySelector('.slider');
    const sliderContainer = document.querySelector('.slider__container');

    addPreload(slider);
    sliderContainer.style.display = 'none';

    window.addEventListener('load', () => {
        removePreload(slider);
        sliderContainer.style.display = '';
    })
}