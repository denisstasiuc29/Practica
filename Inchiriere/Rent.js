
  const brandSelect = document.getElementById("brand");
  const yearSelect = document.getElementById("year");
  const priceSelect = document.getElementById("price");
  const filterButton = document.querySelector(".apply-btn");
  const carCards = document.querySelectorAll(".car-card");

  function filterCars() {
    const selectedBrand = brandSelect.value;
    const selectedYear = yearSelect.value;
    const selectedPrice = priceSelect.value;

    carCards.forEach(card => {
      const cardBrand = card.getAttribute("data-brand");
      const cardYear = parseInt(card.getAttribute("data-year"));
      const cardPrice = parseInt(card.getAttribute("data-price"));

      // Filtrare preț
      let priceMin = 0;
      let priceMax = Infinity;
      if (selectedPrice) {
        const [min, max] = selectedPrice.split("-").map(Number);
        priceMin = min;
        priceMax = max;
      }

      const matchBrand = !selectedBrand || cardBrand === selectedBrand;
      const matchYear = !selectedYear || cardYear === parseInt(selectedYear);
      const matchPrice = cardPrice >= priceMin && cardPrice <= priceMax;

      if (matchBrand && matchYear && matchPrice) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  // Filtrare automată la schimbarea unui select
  brandSelect.addEventListener("change", filterCars);
  yearSelect.addEventListener("change", filterCars);
  priceSelect.addEventListener("change", filterCars);

  // Filtrare la apăsarea butonului
  filterButton.addEventListener("click", filterCars);


