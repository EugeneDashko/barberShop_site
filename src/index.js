import './index.html';
import './index.scss';
import { initService } from './modules/initService';
import { preLoadSlider } from './modules/preLoadSlider';
import { startSlider } from './modules/slider';
// import './page.html';

const API_URL = 'https://shocking-blush-lift.glitch.me/';

/*
Доступные методы:
GET /api - получить список услуг
GET /api?service={n} - получить список барберов
GET /api?spec={n} - получить список месяца работы барбера
GET /api?spec={n}&month={n} - получить список дней работы барбера
GET /api?spec={n}&month={n}&day={n} - получить список свободных часов барбера
POST /api/order - оформить заказ
*/

//new modules:


const init = () => {

    preLoadSlider();
    startSlider();
    initService();

}
window.addEventListener('DOMContentLoaded',init);


//use modules
