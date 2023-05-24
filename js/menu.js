// Список всех ID секций
const sectionIds = ['home', 'menu', 'voucher', 'blog', 'shop', 'contact'];

const navItems = document.querySelectorAll('.nav-link');
// Функция для удаления активного класса с всех элементов навигации
function removeActiveClasses() {
  navItems.forEach((navItem) => navItem.classList.remove('active'));
}

// Обработчик события прокрутки
window.onscroll = () => {
  const scrollPos = window.scrollY + 250;
  const nearBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
  
  let index = sectionIds.length;
  
  while(--index && scrollPos < document.getElementById(sectionIds[index]).offsetTop) {}

  removeActiveClasses();

  // Если мы близко к нижней части страницы, выделит "contact"
  if (nearBottom) {
    document.querySelector(`.nav-link[href="#contact"]`).classList.add('active');
  } else {
    document.querySelector(`.nav-link[href="#${sectionIds[index]}"]`).classList.add('active');
  }
};

// Обработчик события клика
sectionIds.forEach((id) => {
  const navItem = document.querySelector(`.nav-link[href="#${id}"]`);
  
  navItem.addEventListener('click', (e) => {
    e.preventDefault();
    
    window.scrollTo({
        top: document.getElementById(id).offsetTop - 100,
      behavior: "smooth"
    });
  });
});

// Наведение

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