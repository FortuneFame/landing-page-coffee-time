$(document).ready(function() {
  // Скрыть все описания по умолчанию
  $('.accordion-content').hide();

  // Проверить ширину экрана
  if ($(window).width() <= 1440) {
    // Если ширина экрана 1440px или меньше, добавить класс 'open' к первому заголовку аккордеона
    $('.accordion-header').first().addClass('open-about');
    // Показать содержимое первого аккордеона
    $('.accordion-header').first().next('.accordion-content').show();
  }

  // Обработчик событий для клика по заголовку
  $('.accordion-header').click(function() {
    // Проверить состояние аккордеона
    if ($(this).hasClass('open-about')) {
      // Если заголовок открыт, закрыть его и скрыть описание
      $(this).removeClass('open-about');
      $(this).next('.accordion-content').slideUp();
    } else {
      // Если заголовок закрыт, закрыть другие открытые заголовки и показать описание
      $('.accordion-header').removeClass('open-about');
      $('.accordion-content').slideUp();
      $(this).addClass('open-about');
      $(this).next('.accordion-content').slideDown();
    }
  });
});
