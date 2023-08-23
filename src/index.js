import './index.html';
import './index.scss';
import { preLoadSlider } from './modules/preloadSlider';
import { startSlider } from './modules/slider';
// import './page.html';

//new modules:
window.addEventListener('DOMContentLoaded',preLoadSlider);
startSlider();

//use modules
