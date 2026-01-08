// Functie om de klok bij te werken
function updateKlok() {
  const klok = document.getElementById('klok');
  const now = new Date();
  const uren = now.getHours().toString().padStart(2, '0');
  const minuten = now.getMinutes().toString().padStart(2, '0');
  klok.textContent = `${uren}:${minuten}`;
}

// Update de klok elke seconde
setInterval(updateKlok, 1000);
updateKlok(); 

// Treinvertrektijd afwisselend weergeven
const vertrektijdElement = document.getElementById('vertrektijd');
let showCountdown = true;

setInterval(() => {
  if (showCountdown) {
    vertrektijdElement.textContent = vertrektijdElement.getAttribute('data-time'); 
  } else {
    vertrektijdElement.textContent = "1 minuut";
  }
  showCountdown = !showCountdown;
}, 5000);


