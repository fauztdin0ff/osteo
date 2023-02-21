
let iconMenu = document.querySelector('.menu__icon');
let menuBody = document.querySelector('.menu__body');

if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
};
menuBody.addEventListener('click', function (e) {
   if (e.target.matches('a')) {
      menuBody.classList.remove('_active');
      iconMenu.classList.remove('_active');
      document.body.classList.remove('_lock');
   }
});
