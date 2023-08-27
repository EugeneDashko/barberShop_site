import { addPreload, removePreload } from "./preload";


export const preLoadSlider = () => {

    const slider = document.querySelector('.slider');
    const sliderContainer = document.querySelector('.slider__container');

    addPreload(slider);
    sliderContainer.style.display = 'none';

    window.addEventListener('load', () => {
        removePreload(slider);
        sliderContainer.style.display = '';
    })
}