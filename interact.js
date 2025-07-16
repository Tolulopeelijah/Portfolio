// TRACKING DOT
const tracker = document.createElement("div");
tracker.id = "tracker";
document.body.appendChild(tracker);

document.addEventListener("mousemove", (e) => {
  tracker.style.left = `${e.clientX}px`;
  tracker.style.top = `${e.clientY}px`;

  // Create trail bits
  const bit = document.createElement("div");
  bit.classList.add("trail-bit");
  bit.textContent = Math.random() > 0.5 ? "1" : "0";

  const offsetX = (Math.random() - 0.5) * 40;
  const offsetY = (Math.random() - 0.5) * 40;

  bit.style.left = `${e.clientX + offsetX}px`;
  bit.style.top = `${e.clientY + offsetY}px`;
  bit.style.opacity = 0.8;

  document.body.appendChild(bit);

  // Animate and remove
  setTimeout(() => {
    bit.style.opacity = 0;
  }, 100);

  setTimeout(() => {
    bit.remove();
  }, 800);
});

// THEME TOGGLE
const toggle = document.getElementById("toggle-theme");
toggle?.addEventListener("click", () => {
  document.body.classList.toggle("bg-dark");
});



// === THEME TOGGLE ===

const themeBtn = document.getElementById('toggle-theme');
const body = document.body;

function applyTheme(theme) {
  if (theme === 'dark') {
    body.classList.add('bg-dark', 'text-light');
    document.querySelectorAll('.card').forEach(c => c.classList.add('bg-secondary', 'text-white'));
  } else {
    body.classList.remove('bg-dark', 'text-light');
    document.querySelectorAll('.card').forEach(c => c.classList.remove('bg-secondary', 'text-white'));
  }
  localStorage.setItem('theme', theme);
}

themeBtn.addEventListener('click', () => {
  const current = localStorage.getItem('theme') || 'light';
  const next = current === 'light' ? 'dark' : 'light';
  applyTheme(next);
});

