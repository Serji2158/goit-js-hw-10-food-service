import menuData from '../menu.json';
import makeMenuMarkup from '../templates/menu-cards.hbs';

const mainMenu = document.querySelector('.js-menu');
const menuMarkup = makeMenuMarkup(menuData);

mainMenu.innerHTML = menuMarkup;

