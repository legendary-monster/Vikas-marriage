// ---------------- Slideshow effect ----------------
let currentSlide = 0;
const slides = document.querySelectorAll<HTMLImageElement>(".slide");

function showSlide(index: number) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 4000);

// ---------------- Countdown effect ----------------
function setupCountdown(targetDate: string, elementId: string) {
  const countdownEl = document.getElementById(elementId);
  if (!countdownEl) return;

  function updateCountdown() {
    const eventDate = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
      countdownEl.innerText = "It's happening today!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();
}

// Marriage countdown
setupCountdown("May 15, 2026 18:00:00", "marriage-countdown");

// Reception countdown
setupCountdown("May 17, 2026 18:00:00", "reception-countdown");
