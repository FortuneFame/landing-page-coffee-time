AOS.init();

let svgs = Array.from(document.querySelectorAll('.svg'));

svgs.forEach(svg => {
    svg.addEventListener('mousemove', function (event) {
        let rect = svg.getBoundingClientRect();
        let x = rect.left + rect.width / 2;
        let y = rect.top + rect.height / 2;

        let dx = event.clientX - x;
        let dy = event.clientY - y;

        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
            let strength = 10;
            let fx = (dx / distance) * strength;
            let fy = (dy / distance) * strength;

            svg.style.transform = `translate(${fx}px, ${fy}px)`;
        }
    });

    svg.addEventListener('mouseleave', function () {
        svg.style.transform = '';
    });
});
