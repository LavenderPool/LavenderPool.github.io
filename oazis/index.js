function changeStatusBurger(){
   const nav = document.getElementById('mobile-nav');
   const burger = document.getElementById('mobile-burger');

   if(nav.classList.contains('active')){
      burger.classList.remove('active')
      nav.classList.remove('active')
   }
   else{
      burger.classList.add('active')
      nav.classList.add('active')
   }
}

document.addEventListener('DOMContentLoaded', () => {
   const nav = document.getElementById('mobile-nav');
   const burger = document.getElementById('mobile-burger');

   const sections = document.querySelectorAll('section');
   const navLinks = document.querySelectorAll('.header_nav a, .mobile-nav a');

   // Функция для добавления класса активности
   const makeActive = (link) => navLinks.forEach((l) => l.href === link.href ? l.classList.add('active-link') : l.classList.remove('active-link'));

   // Функция для проверки видимости секции
   const isInViewport = (el) => {
       const rect = el.getBoundingClientRect();
       return (
           rect.top >= 0 &&
           rect.left >= 0 &&
           rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
           rect.right <= (window.innerWidth || document.documentElement.clientWidth)
       )
   };

   // Обработчик прокрутки страницы
   document.addEventListener('scroll', () => {
       sections.forEach((section) => {
           if (isInViewport(section)) {
               const activeLink = Array.from(navLinks).find(link => link.getAttribute('href') === `#${section.id}`);
               if (activeLink) {
                   burger.classList.remove('active')
                   nav.classList.remove('active')
                   makeActive(activeLink);
               }
           }
       });
   });

   // Добавляем анимацию прокрутки к ссылкам в навигации
   navLinks.forEach((link) => {
       link.addEventListener('click', (e) => {
           e.preventDefault(); // Предотвращаем стандартное действие ссылки
           const targetId = link.getAttribute('href').substring(1); // Получаем ID целевой секции
           const targetSection = document.getElementById(targetId); // Находим целевую секцию
           if (targetSection) {
               window.scrollTo({
                   top: targetSection.offsetTop - 70,
                   behavior: 'smooth' // Добавляем плавную анимацию
               });
           }
       });
   });
});