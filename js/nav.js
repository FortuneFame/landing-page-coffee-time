// Список всех ID секций
const sectionIds = ['home', 'menu', 'voucher', 'blog', 'team', 'shop', 'branches', 'about', 'contact'];

// Соответствие секций и пунктов навигации
const sectionNavMapping = {
  'home': 'home',
  'menu': 'menu',
  'voucher': 'voucher',
  'blog': 'blog',
  'team': 'blog',
  'shop': 'shop',
  'branches': 'shop',
  'about': 'shop',
  'contact': 'contact',
}

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
    let navId = sectionNavMapping[sectionIds[index]];
    document.querySelectorAll(`.nav-link[href="#${navId}"], .nav-link-footer[href="#${navId}"]`).forEach(item => item.classList.add('active'));
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

// Обработчик события клика для ссылок "link-info"
const linkInfoItems = document.querySelectorAll(`.link-info[href="#team"]`);
  
linkInfoItems.forEach((linkItem) => {
  linkItem.addEventListener('click', (e) => {
    e.preventDefault();
      
    window.scrollTo({
      top: document.getElementById('team').offsetTop - 200,
      behavior: "smooth"
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

// Находим элемент с классом 'supp-link' и добавляем обработчик события на клик
document.querySelector('.supp-link').addEventListener('click', function(event) {
    // Отменяем стандартное действие при клике, чтобы страница не перезагружалась
    event.preventDefault();

    // Находим ближайший родительский элемент с классом 'contact-box'
    let contactInfo = this.parentNode.querySelector('.contact-box');

    // Если свойство display у элемента не установлено, устанавливаем его в 'none'
    // Это нужно, чтобы при первом клике элемент уже был скрыт и мы могли его показать
    if (!contactInfo.style.display) {
        contactInfo.style.display = "none";
    }

    // Если элемент скрыт (его свойство display равно 'none')
    if (contactInfo.style.display === "none") {
        // Показываем элемент, устанавливая его свойство display в 'block'
        contactInfo.style.display = "block";
    } else {
        // Если элемент показан (его свойство display равно 'block'), скрываем его
        contactInfo.style.display = "none";
    }
});

let linkInfos = document.querySelectorAll('.link-info');
linkInfos.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        let subInfoList = link.nextElementSibling;
        if (subInfoList) {
            // закрываем все подменю
            document.querySelectorAll('.sub-info-list').forEach(sub => {
                if(sub !== subInfoList) {
                    sub.style.display = 'none';
                }
            });

            // переключаем состояние выбранного подменю
            if (window.getComputedStyle(subInfoList).display === 'none') {
                subInfoList.style.display = 'block';
            } else {
                subInfoList.style.display = 'none';
            }
        }
    });
});
