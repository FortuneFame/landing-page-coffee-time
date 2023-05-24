// Обработка и работа с модальным окном
// Получаем элементы
let modal = document.getElementById('openModal');
let closeBtn = document.getElementById('btn-close');
let orderNowBtns = document.querySelectorAll('.orderNow');

// Добавляем обработчик событий к каждой кнопке "Order Now"
orderNowBtns.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'flex';
    });
});

// Добавляем обработчик события к кнопке закрытия
closeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'none';
});

// Закрываем модальное окно при клике вне его
window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});


// Проверка и работа с формой
const form = document.getElementById('openModal');
const userName = document.getElementById('user-name-form');
const userTel = document.getElementById('user-tel-form');
const userEmail = document.getElementById('user-email-form');

// Проверка номера телефона
function validatePhoneNumber(phoneNumber) {
    const phoneNumberPattern = /^\+38\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    return phoneNumberPattern.test(phoneNumber);
}

// Добавление префикса
function addPrefix() {
    if (userTel.value === "") {
        userTel.value = "+38";
    }
}

// Предотвращение удаления
function preventDeletion(event) {
    let cursorPosition = userTel.selectionStart;
    if (cursorPosition <= 3 && (event.key === "Backspace" || event.key === "Delete")) {
        event.preventDefault();
    } else if (event.key.length === 1 && /\D/.test(event.key)) {
        event.preventDefault();
    }
}

// Форматирование номера телефона
function formatPhoneNumber() {
    let cursorPosition = userTel.selectionStart;
    let value = userTel.value;
    let digits = value.replace(/\D/g, "").slice(2);
    let formattedValue = "+38";
    if (digits.length > 0) {
        formattedValue += "(" + digits.slice(0, 3);
    }
    if (digits.length > 3) {
        formattedValue += ")-" + digits.slice(3, 6);
    }
    if (digits.length > 6) {
        formattedValue += "-" + digits.slice(6, 8);
    }
    if (digits.length > 8) {
        formattedValue += "-" + digits.slice(8);
    }
    userTel.value = formattedValue;
    if (cursorPosition <= 3) {
        cursorPosition = 3;
    } else if (cursorPosition <= 7) {
        cursorPosition += 1;
    } else if (cursorPosition <= 11) {
        cursorPosition += 2;
    } else {
        cursorPosition += 3;
    }
    userTel.setSelectionRange(cursorPosition, cursorPosition);
}

userTel.addEventListener("keyup", formatPhoneNumber);
userTel.addEventListener("keydown", preventDeletion);
userTel.addEventListener("focus", addPrefix);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Проверка имени пользователя
    if (userName.value.trim().length < 2) {
        alert('Please enter your name. It should be at least 2 characters long.');
        userName.focus();
        return;
    }

    // Проверка номера телефона
    if (!validatePhoneNumber(userTel.value)) {
        alert('Please enter a valid phone number.');
        userTel.focus();
        return;
    }

    // Проверка электронной почты
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // простой формат электронной почты
    if (!emailRegex.test(userEmail.value)) {
        alert('Please enter a valid email address.');
        userEmail.focus();
        return;
    }

    // Если все проверки прошли успешно, мы можем отправить форму
    form.submit();
});