import { refs } from './burger/refs.js';
import { toggleClass } from './burger/burger.js';

// burger menu

refs.burgerMenuOpenBtn.addEventListener('click', toggleClass(refs.burgerMenu));
refs.burgerMenuCloseBtn.addEventListener('click', toggleClass(refs.burgerMenu));
