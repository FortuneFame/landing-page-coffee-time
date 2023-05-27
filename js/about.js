$(document).ready(function() {
    // Скрыть все описания по умолчанию
    $('.accordion-content').hide();

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

    // Обработчик событий для подссылок
    $('.address').click(function(e) {
        e.preventDefault();

        // Получить идентификатор соответствующего элемента аккордеона
        let accordionId = $(this).attr('href');

        // Переместить прокрутку к элементу аккордеона
        $('html, body').animate({
            scrollTop: $(accordionId).offset().top -200
        }, 1000);

        // Закрыть другие открытые заголовки и показать описание для выбранного элемента аккордеона
        $('.accordion-header').removeClass('open-about');
        $('.accordion-content').slideUp();
        $(accordionId).find('.accordion-header').addClass('open-about');
        $(accordionId).find('.accordion-content').slideDown();
    });
});

$(document).ready(function() {
    // Обработчик событий для подссылок
    $('.address').click(function(e) {
        e.preventDefault();

        // Получить идентификатор соответствующего элемента списка
        let branchId = $(this).attr('href');

        // Увеличить выбранный элемент .comment и уменьшить остальные
        $('.comment').css('transform', 'scale(1)');
        $(branchId).find('.comment').css('transform', 'scale(1.3)');

        // Добавить подсветку к выбранному элементу списка и удалить с остальных
        $('.branches-list').removeClass('active-bran');
        $(branchId).addClass('active-bran');
    });

    // Обработчик событий для элементов .comment
    $('.comment').click(function() {
        // Уменьшить все элементы .comment
        $('.comment').css('transform', 'scale(1)');

        // Удалить подсветку со всех элементов списка
        $('.branches-list').removeClass('active-bran');
    });
});
