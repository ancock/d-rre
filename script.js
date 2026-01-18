document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     SMOOTH SCROLL NAVIGATION
  ========================= */
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  /* =========================
     VERGLEICH: HEUTE vs 2050
     Fokus: Wasserstress & Menschenrechte
  ========================= */
  const yearSlider = document.getElementById("yearSlider");
  const yearLabel = document.getElementById("yearLabel");
  const barToday = document.getElementById("barToday");
  const bar2050 = document.getElementById("bar2050");

  if (yearSlider && yearLabel && barToday && bar2050) {

    const updateYearView = (value) => {
      if (value == 0) {
        yearLabel.textContent = "Heute";

        barToday.style.width = "45%";
        bar2050.style.width = "70%";

      } else {
        yearLabel.textContent = "2050";

        barToday.style.width = "45%";
        bar2050.style.width = "85%";
      }
    };

    // Initiale Darstellung setzen
    updateYearView(yearSlider.value);

    yearSlider.addEventListener("input", () => {
      updateYearView(yearSlider.value);
    });
  }

  /* =========================
     DÜRRE-WELTKARTE
     Fokus: Auswirkungen auf Menschenrechte
  ========================= */
  const droughtSlider = document.getElementById("droughtSlider");
  const droughtLayer = document.getElementById("droughtLayer");
  const droughtValue = document.getElementById("droughtValue");
  const mapText = document.getElementById("mapText");

  if (droughtSlider && droughtLayer && droughtValue && mapText) {

    const updateDroughtView = (value) => {
      const val = parseInt(value, 10);

      // Anzeige & visuelle Intensität
      droughtValue.textContent = val + " %";
      droughtLayer.style.opacity = val / 100;

      // Menschenrechtsbezogene Texte
      if (val < 25) {
        mapText.textContent =
          "Die meisten Regionen verfügen noch über stabilen Zugang zu sauberem Trinkwasser und funktionierende Versorgungssysteme.";
      } else if (val < 50) {
        mapText.textContent =
          "In vielen Regionen wird Wasser knapper. Landwirtschaft und Städte geraten unter Druck, besonders für sozial benachteiligte Gruppen.";
      } else if (val < 75) {
        mapText.textContent =
          "Der Zugang zu sauberem Trinkwasser ist in mehreren Weltregionen nicht mehr gesichert. Das Recht auf Gesundheit und Nahrung ist zunehmend gefährdet.";
      } else {
        mapText.textContent =
          "Extreme Dürre bedroht weltweit grundlegende Menschenrechte: Wasser, Nahrung, Gesundheit und ein Leben in Würde.";
      }
    };

    // Initiale Darstellung setzen
    updateDroughtView(droughtSlider.value);

    droughtSlider.addEventListener("input", () => {
      updateDroughtView(droughtSlider.value);
    });
  }

});
