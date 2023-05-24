$(document).ready(function() {
  const mapLink = $("#map");
  const modal = $("#myModalMap");
  const closeButton = modal.find(".btn-close");
  let map;

  function openModal(event) {
    event.preventDefault();
    modal.css("display", "flex");

    if (!map) {
      // Установка координат на предоставленные значения
      map = L.map('mapContainer').setView([49.706721304809626, 19.009686597175907], 17); // увеличили масштаб

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(map);

      // Добавление маркера на карту на тех же координатах
      L.marker([49.706721304809626, 19.009686597175907])
        .addTo(map)
        .bindPopup("<h2 class='map-text'>Coffee Time 4U(Myśliwska 63a, 43-370 Szczyrk)</h2>")
        .openPopup();
    } else {
      map.invalidateSize();
    }
  }

  function closeModal() {
    modal.css("display", "none");
    $("body").removeClass("modal-open");
  }

  mapLink.on("click", openModal);
  closeButton.on("click", closeModal);

  $(window).on("click", function(event) {
    if (event.target === modal[0]) {
      closeModal();
    }
  });
});