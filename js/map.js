$(document).ready(function() {
  const mapLink = $("#map");
  const modal = $("#myModalMap");
  const closeButton = modal.find(".btn-close");
  let map;

  function openModal(event) {
    event.preventDefault();
    modal.css("display", "flex");

    if (!map) {
      // Создание и инициализация карты только при первом открытии модального окна
      map = L.map('mapContainer').setView([49.706721304809626, 19.009686597175907], 17); // Установка координат и увеличение масштаба

      // Добавление слоя с картой OpenStreetMap на карту
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(map);

      // Добавление маркера на карту с указанными координатами
      L.marker([49.706721304809626, 19.009686597175907])
        .addTo(map)
        .bindPopup("<h2 class='map-text'>Coffee Time 4U(Myśliwska 63a, 43-370 Szczyrk)</h2>")
        .openPopup();
    } else {
      // Обновление размеров карты при повторном открытии модального окна
      map.invalidateSize();
    }
  }

  function closeModal() {
    // Закрытие модального окна
    modal.css("display", "none");
    $("body").removeClass("modal-open");
  }

  mapLink.on("click", openModal);
  closeButton.on("click", closeModal);

  $(window).on("click", function(event) {
    // Закрытие модального окна при клике за его пределами
    if (event.target === modal[0]) {
      closeModal();
    }
  });
});
