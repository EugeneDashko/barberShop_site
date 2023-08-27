import { addPreload, removePreload } from "./preload";
export const initService = () => {
    const priceList = document.querySelector('.price__list');
    priceList.textContent = '';

    addPreload(priceList);
}