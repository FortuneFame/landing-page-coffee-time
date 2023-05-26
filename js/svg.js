AOS.init(); // Инициализация AOS (Animate On Scroll) для анимации элементов при прокрутке страницы

let svgs = Array.from(document.querySelectorAll('.svg')); // Получение всех элементов с классом 'svg' и сохранение их в массив

svgs.forEach(svg => {
    svg.addEventListener('mousemove', function (event) {
        // Обработчик события 'mousemove' для каждого элемента SVG

        let rect = svg.getBoundingClientRect();
        let x = rect.left + rect.width / 2;
        let y = rect.top + rect.height / 2;

        let dx = event.clientX - x;
        let dy = event.clientY - y;

        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
            // Если расстояние от указателя мыши до центра SVG-элемента меньше 100 пикселей, применяем эффект параллакса

            let strength = 10;
            let fx = (dx / distance) * strength;
            let fy = (dy / distance) * strength;

            svg.style.transform = `translate(${fx}px, ${fy}px)`; // Применяем смещение элемента SVG в зависимости от положения указателя мыши
        }
    });

    svg.addEventListener('mouseleave', function () {
        // Обработчик события 'mouseleave' для каждого элемента SVG

        svg.style.transform = ''; // Сбрасываем примененное смещение элемента SVG при уходе указателя мыши
    });
});
