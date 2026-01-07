// ===== Functie om de huidige tijd bij te werken =====
function updateKlok() {
  const klok = document.getElementById('klok');
  const now = new Date();
  const uren = now.getHours().toString().padStart(2, '0');
  const minuten = now.getMinutes().toString().padStart(2, '0');
  klok.textContent = `${uren}:${minuten}`;
}

// Update klok elke seconde
setInterval(updateKlok, 1000);
updateKlok(); // direct bij laden

// ===== Wissel de vertrektijd tussen countdown en echte tijd =====
const vertrektijdElement = document.getElementById('vertrektijd');
let showCountdown = true;

setInterval(() => {
  if (showCountdown) {
    vertrektijdElement.textContent = vertrektijdElement.getAttribute('data-time'); // echte vertrektijd
  } else {
    vertrektijdElement.textContent = "1 minuut";
  }
  showCountdown = !showCountdown;
}, 5000); // wisselt elke 5 seconden

