import { addPreload, removePreload } from "./preload";
import { API_URL } from "..";
import { renderPrice } from "./renderPrice";
import { renderService } from "./renderService";


export const initService = () => {
    
    const priceList = document.querySelector('.price__list');
    priceList.textContent = '';
    addPreload(priceList);

    const reserveFieldsetService = document.querySelector('.reserve__fieldset_service');
    reserveFieldsetService.innerHTML = '<legend class="reserve__legend">Услуга</legend>';
    addPreload(reserveFieldsetService);


    fetch (API_URL)
    .then((response) => {
        return response.json();
})
    .then((data) => {
        renderPrice(priceList, data);
        removePreload(priceList);
        return data;
    })
    .then ((data) => {
        renderService(reserveFieldsetService, data);
        removePreload(reserveFieldsetService);
    })
}