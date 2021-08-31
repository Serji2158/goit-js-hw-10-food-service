import LS from './localStorage';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const checkBox = document.querySelector('#theme-switch-toggle');
  checkBox.addEventListener('change', onSwitch);

  

function onSwitch (e) {
  const theme = e.target.checked ? Theme.DARK : Theme.LIGHT
  updateColorBody (theme);
  LS.save('theme', theme);
}

function updateColorBody (theme) {
 document.body.className = theme};

 function start () {
   const newTheme = LS.get('theme') || Theme.LIGHT;
   updateColorBody (newTheme);
   checkBox.checked = newTheme === Theme.DARK;
    }

start ()



