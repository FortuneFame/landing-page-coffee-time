$(document).ready(function() {
  // Скрыть все описания по умолчанию
  $('.accordion-content').hide();

  // Обработчик события для клика на заголовок
  $('.accordion-header').click(function() {
    // Проверка состояния аккордеона
    if ($(this).hasClass('active')) {
      // Если заголовок активен, закрыть его и скрыть описание
      $(this).removeClass('active');
      $(this).next('.accordion-content').slideUp();
    } else {
      // Если заголовок неактивен, закрыть другие активные заголовки и показать описание
      $('.accordion-header').removeClass('active');
      $('.accordion-content').slideUp();
      $(this).addClass('active');
      $(this).next('.accordion-content').slideDown();
    }
  });
});