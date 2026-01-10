/* Smooth Scroll */
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: "smooth"
    });
  });
});

/* Vergleich Heute vs 2050 */
const yearSlider = document.getElementById("yearSlider");
const yearLabel = document.getElementById("yearLabel");
const barToday = document.getElementById("barToday");
const bar2050 = document.getElementById("bar2050");

yearSlider.addEventListener("input", () => {
  if (yearSlider.value == 0) {
    yearLabel.textContent = "Heute";
    barToday.style.width = "45%";
    bar2050.style.width = "70%";
  } else {
    yearLabel.textContent = "2050";
    barToday.style.width = "45%";
    bar2050.style.width = "85%";
  }
});

/* Dürre-Weltkarte */
const droughtSlider = document.getElementById("droughtSlider");
const droughtLayer = document.getElementById("droughtLayer");
const droughtValue = document.getElementById("droughtValue");
const mapText = document.getElementById("mapText");

droughtSlider.addEventListener("input", () => {
  const val = droughtSlider.value;
  droughtValue.textContent = val;

  droughtLayer.style.opacity = val / 100;

  if (val < 30) {
    mapText.textContent =
      "Die meisten Regionen verfügen noch über ausreichende Wasserressourcen.";
  } else if (val < 60) {
    mapText.textContent =
      "Viele Regionen leiden regelmäßig unter Wasserknappheit.";
  } else {
    mapText.textContent =
      "Dürre bedroht weltweit Trinkwasser, Landwirtschaft und Gesundheit.";
  }
});
