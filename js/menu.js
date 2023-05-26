// Список всех ID секций
const sectionIds = ['home', 'menu', 'voucher', 'blog', 'shop', 'contact'];

const navItems = document.querySelectorAll('.nav-link, .nav-link-footer');

// Функция для удаления активного класса с всех элементов навигации
function removeActiveClasses() {
  navItems.forEach((navItem) => navItem.classList.remove('active'));
}

// Обработчик события прокрутки
window.onscroll = () => {
  const scrollPos = window.scrollY + window.innerHeight / 4; // Динамическое смещение
  const contactSection = document.getElementById('contact');
  const contactPosition = contactSection.getBoundingClientRect();

  let index = sectionIds.length;
  
  while(--index && scrollPos < document.getElementById(sectionIds[index]).offsetTop) {}

  // Удалить активные классы перед добавлением нового
  removeActiveClasses();

  // Если верх секции "contact" находится в области просмотра, выделить "contact"
  if (contactPosition.top <= window.innerHeight && contactPosition.bottom >= 0) {
    document.querySelectorAll(`.nav-link[href="#contact"], .nav-link-footer[href="#contact"]`).forEach(item => item.classList.add('active'));
  } else {
    document.querySelectorAll(`.nav-link[href="#${sectionIds[index]}"], .nav-link-footer[href="#${sectionIds[index]}"]`).forEach(item => item.classList.add('active'));
  }
};

// Обработчик события клика
sectionIds.forEach((id) => {
  const navItems = document.querySelectorAll(`.nav-link[href="#${id}"], .nav-link-footer[href="#${id}"]`);
  
  navItems.forEach((navItem) => {
    navItem.addEventListener('click', (e) => {
      e.preventDefault();
      
      window.scrollTo({
        top: document.getElementById(id).offsetTop - 100,
        behavior: "smooth"
      });
    });
  });
});

// Получить все элементы nav-link-footer
const footerNavItems = document.querySelectorAll('.nav-link-footer');

// Добавить обработчик события для каждого элемента
footerNavItems.forEach((navItem) => {
  // Обработчик события mouseover (наведение мыши)
  navItem.addEventListener('mouseover', (e) => {
    e.target.classList.add('active-footer');
  });

  // Обработчик события mouseout (уход мыши)
  navItem.addEventListener('mouseout', (e) => {
    e.target.classList.remove('active-footer');
  });
});

document.querySelector('.supp-link').addEventListener('click', function(event) {
    event.preventDefault();
    var contactInfo = this.parentNode.querySelector('.contact-box');
    if (contactInfo.style.display === "none") {
        contactInfo.style.display = "block";
    } else {
        contactInfo.style.display = "none";
    }
});